import assert from 'assert/strict';
import * as fs from 'fs/promises';
import * as path from 'path';

import glob from 'glob';
import { convert as widdershins } from 'widdershins';
import YAML, { CST, LineCounter, Parser } from 'yaml';

class Spec {
  #counter = new LineCounter();
  #cache = new Map();
  #cst;
  yaml;

  constructor(raw) {
    this.yaml = YAML.parse(raw);
    const docs = Array.from(new Parser(this.#counter.addNewLine).parse(raw));
    assert.equal(docs.length, 1);
    this.#cst = docs[0];
  }

  #unescape(ref) {
    return ref.replaceAll('~1', '/').replaceAll('~0', '~');
  }

  #split(ref) {
    assert(ref.startsWith?.('#/'));
    return ref.split('/').slice(1).map(this.#unescape);
  }

  get(ref) {
    return this.#split(ref).reduce((yaml, key) => yaml?.[key], this.yaml);
  }

  lineOf(ref) {
    assert(ref.startsWith?.('#/'));
    if (!this.#cache.has(ref)) {
      const segments = this.#split(ref);
      const depth = segments.length;
      const basename = segments.pop();
      CST.visit(this.#cst, ({ key }, path) => {
        if (
          CST.isScalar(key)
          && key.source === basename
          && path.length === depth
          && segments.every((seg, i) => {
            const item = CST.visit.itemAtPath(this.#cst, path.slice(0, i + 1));
            return CST.isScalar(item.key) && item.key.source === seg;
          })
        ) {
          this.#cache.set(ref, this.#counter.linePos(key.offset).line);
        }
      });
    }
    return this.#cache.get(ref);
  }

  static async fromFile(filepath) {
    return new Spec(await fs.readFile(filepath, 'utf8'));
  }
}

const markup = (begin, end = begin) => (text) => begin + text + end;
const tag = (name) => markup(`<${name}>`, `</${name}>`);

const html = {
  b: tag('b'),
  blockquote: tag('blockquote'),
  br: '<br>',
  details: (summary, text) => tag('details')(tag('summary')(summary) + text),
  div: tag('div'),
  ensp: '&ensp;',
  img: (attrs) => {
    return `<${
      ['img', ...Object.entries(attrs).map(([k, v]) => `${k}="${v}"`)].join(' ')
    }>`;
  },
  nbsp: '&nbsp;',
  p: tag('p'),
  sub: tag('sub'),
  summary: tag('summary'),
  sup: tag('sup'),
  var: tag('var'),
};

const md = {
  b: markup('**'),
  code: markup('`'),
  emoji: markup(':'),
  i: markup('_'),
  math: markup('$'),
  strike: markup('~~'),
};

const shieldsio = {
  static: (label, message, color, params = {}) => {
    const url = new URL(
      `https://img.shields.io/badge/${label}-${message}-${color}`,
    );
    url.search = new URLSearchParams(params);
    return url.href;
  },
};

class Formatter {
  #data;
  #spec;

  constructor(spec, data) {
    this.#spec = spec;
    this.#data = data;
  }

  #schemaToArray(schema) {
    return this
      .#data
      .utils
      .schemaToArray(schema, 0, { trim: true }, this.#data);
  }

  enum(elems, { itemsEnum = false, threshold = 5 } = {}) {
    if (!(elems?.length)) {
      return '';
    }
    const label = `${itemsEnum ? 'Items ' : ''}${
      elems.length === 1 ? 'Value' : 'Enum'
    }:`;
    const values = elems
      .map((e) => md.code(this.#data.utils.toPrimitive(e)))
      .join(', ');
    return elems.length <= threshold
      ? `${label} ${values}`
      : html.p(html.details(label, html.p(html.div(values))));
  }

  const(value, config) {
    return value === undefined ? '' : this.enum([value], config);
  }

  name(entry) {
    let { name } = entry;
    const { displayName = '', schema } = entry;
    const indent = /^»* ?/.exec(displayName)[0].replace(' ', html.nbsp);
    const required = entry.required
      ? html.br + md.math('\\textcolor{#D29922}{\\textsf{required}}')
      : '';
    if (/^\*.*\*$/.test(name)) {
      name = html.var(`\\<${name.slice(1, -1)}>`);
    } else if (name === schema?.title) {
      name = html.var(name);
    } else {
      name = md.code(name);
    }
    if (schema?.deprecated) {
      name = md.strike(name);
    }
    return entry.displayName = indent + name + required;
  }

  attribute(entry, attr) {
    if (attr !== undefined) {
      entry.safeType += html.br + md.code(attr);
    }
  }

  relink(entry) {
    if (typeof entry === 'string') {
      const re = /(?<=\()#\/paths\/[^/]+?\/get(?=\))/gu;
      entry = entry.replaceAll(re, (ref) => {
        const summary = this.#spec.get(ref)?.summary;
        if (summary) {
          return '#' + summary.trim().toLowerCase().replaceAll(' ', '-');
        } else {
          return ref;
        }
      });
    } else if (entry instanceof Object) {
      const { safeType, schema } = entry;
      const tag = 'x-widdershins-oldRef';
      const $ref = schema[tag] ?? schema.items?.[tag];
      if ($ref !== undefined) {
        const id = $ref
          .replace('#/components/schemas/', '#schema')
          .toLowerCase();
        if (safeType.includes(id)) {
          const line = this.#spec.lineOf($ref);
          assert(line !== undefined);
          entry.safeType = safeType.replace(
            id,
            `${this.#data.source.path}#L${line}`,
          );
        }
      }
    }
    return entry;
  }

  integer(entry) {
    const { schema: { maximum, minimum } } = entry;
    let attr;
    if (minimum !== undefined && maximum !== undefined) {
      attr = `[${minimum}..${maximum}]`;
    } else if (minimum !== undefined) {
      attr = `>= ${minimum}`;
    } else if (maximum !== undefined) {
      attr = `<= ${maximum}`;
    }
    this.attribute(entry, attr);
  }

  string(entry) {
    const { schema: { format, minLength } } = entry;
    if (format === 'uri') {
      entry.safeType = 'URI';
    }
    if (minLength) {
      this.attribute(entry, 'non-empty');
    }
  }

  array(entry) {
    const { safeType, schema: { maxItems, minItems, uniqueItems } } = entry;
    entry.safeType = safeType.replace(/^array\[/u, '[');
    if (minItems) {
      if (minItems === maxItems) {
        this.attribute(entry, `${minItems} item${minItems === 1 ? '' : 's'}`);
      } else {
        this.attribute(entry, 'non-empty');
      }
    }
    if (uniqueItems) {
      this.attribute(entry, 'unique');
    }
  }

  object(entry) {
    const { schema: { minProperties, required } } = entry;
    if (minProperties || required?.length) {
      this.attribute(entry, 'non-empty');
    }
  }

  type(entry) {
    const { safeType, schema } = entry;
    if (Array.isArray(safeType)) {
      entry.safeType = safeType.filter((t) => t !== 'null').join(' \\| ');
      if (safeType.includes('null')) {
        this.attribute(entry, 'nullable');
      }
    }
    this[schema.type]?.(entry);
    return entry.safeType;
  }

  default(entry) {
    const { description = '', schema } = entry;
    if (schema?.default !== undefined) {
      entry.description = html.sup(
        `Default: ${md.code(JSON.stringify(schema.default))}`,
      ) + html.br + '\n' + description;
    }
  }

  warning(entry) {
    const warning = `> ${md.b('Warning')}:`;
    const lines = entry.description?.split(/\r?\n/u) ?? [];
    let description = '';
    for (let i = 0; i < lines.length; ++i) {
      if (lines[i].startsWith(warning)) {
        const chunks = [lines[i].slice(warning.length).trimStart()];
        for (++i; i < lines.length && lines[i].startsWith('> '); ++i) {
          chunks.push(lines[i].slice(1).trimStart());
        }
        description += html.p(html.blockquote(
          [md.b(`${md.emoji('warning')} Warning`) + ':', ...chunks].join(' '),
        ));
      } else {
        description += ' ' + lines[i].trimStart();
      }
    }
    entry.description = description.trimStart();
  }

  description(entry) {
    this.default(entry);
    this.warning(entry);
    const { description, schema } = entry;
    const enums = this.enum(schema?.enum)
      + this.enum(schema?.items?.enum, { itemsEnum: true })
      + this.const(schema?.const)
      + this.const(schema?.items?.const, { itemsEnum: true });
    return entry.description =
      (enums.length && description.length ? html.p(description) : description)
      + enums;
  }

  entry(entry) {
    this.name(entry);
    this.type(entry);
    this.description(entry);
    return this.relink(entry);
  }

  schema(schema) {
    return this.#schemaToArray(schema).map((table, i, { [i + 1]: next }) => {
      for (const row of table.rows) {
        if (row.safeType === 'any') {
          assert.equal(row, table.rows.at(-1));
          assert.equal(next?.title, 'oneOf');
          assert(row.schema.oneOf);
          row.safeType = 'oneOf';
        }
        this.entry(row);
      }
      return table;
    });
  }

  parameter(parameter) {
    const { schema, style, explode = true } = parameter;
    if (schema?.type === 'object' && style === 'form' && explode) {
      const tables = this.schema(schema);
      assert(tables.length === 1);
      return tables[0].rows.map((row) => {
        row.in = parameter.in;
        row.displayName = row.displayName.replace(/^» ?/u, '');
        return row;
      });
    } else {
      return [this.entry(parameter)];
    }
  }

  response(response) {
    const { content, description, status } = response;
    const color = status < 300 ? '9acd32' : 'cd5c5c';
    const src = shieldsio.static('', status, color, { style: 'flat-square' });
    const attrs = { src, alt: '[status]', height: 24, align: 'top' };
    response.summary = html.img(attrs) + html.ensp + html.b(description);
    for (const [type, { schema }] of Object.entries(content)) {
      content[type] = this.schema(schema);
    }
    return response;
  }
}

const config = {
  codeSamples: false,
  language_tabs: [],
  omitHeader: true,
  tocSummary: true,
  user_templates: '.config/widdershins',
};

for (const source of glob.sync(path.join('openapi', '*', '*.yml'))) {
  const { dir, name } = path.parse(source);
  const outfile = path.format({
    dir: path.join('docs', dir.replace('openapi', 'api')),
    name,
    ext: '.md',
  });
  const templateCallback = (name, stage, data) => {
    if (name === 'main' && stage === 'pre') {
      data.source = {
        badge: shieldsio.static(
          'View specification',
          `OpenAPI v${data.api.openapi}`,
          '6ba539',
          { logo: 'openapiinitiative' },
        ),
        path: path.posix.relative(path.dirname(outfile), source),
      };
      data.format = new Formatter(spec, data);
    }
    return data;
  };
  const spec = await Spec.fromFile(source);
  const md = await widdershins(spec.yaml, {
    ...config,
    outfile,
    source,
    templateCallback,
  });
  await fs.mkdir(path.dirname(outfile), { recursive: true });
  await fs.writeFile(outfile, md);
}

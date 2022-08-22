//
// Config
//

const path = require('path');

const rootdir = path.dirname(process.env.npm_package_json);
const tag = 'v' + process.env.npm_package_version;

module.exports = {
  extends: path.join(__dirname, 'typedoc.json'),
  disableSources: true,
  gitRevision: tag,
  githubPages: false,
  out: path.join(rootdir, 'docs', 'module'),
  plugin: [__filename],
};

//
// Theme
//

const { readdirSync, readFileSync } = require('fs');
const Handlebars = require('handlebars');
const { SignatureReflection } = require('typedoc');
const { MarkdownTheme, load } = require('typedoc-plugin-markdown');

class Theme extends MarkdownTheme {
  constructor(renderer) {
    super(renderer);
    this.constructor.registerPartials();
    this.constructor.registerHelpers();
    this.hideMembersSymbol = true;
  }

  static registerPartials() {
    const dir = path.join(__dirname, 'partials');
    for (const partial of readdirSync(dir)) {
      Handlebars.registerPartial(
        path.basename(partial, '.hbs'),
        readFileSync(path.join(dir, partial), 'utf8'),
      );
    }
  }

  static registerHelpers() {
    const basePath = '../../..';

    const fixUrl = (txt) => {
      return txt.replaceAll(
        /\[([^\]]+)\]\(([^)]+)\)/gu,
        (match, anchor, url) => {
          if (url.startsWith('docs/')) {
            return `[${anchor}](${path.posix.join(basePath, url)})`;
          } else {
            return match;
          }
        },
      );
    };

    const table = (helper) => {
      const [header, rule, ...rows] = helper()
        .split('\n')
        .filter((row) => row.length !== 0)
        .map((row) => row.slice(2, -2).split(' | '));
      return [
        ['', ...header, ''].join('|'),
        ['', ...rule.map(() => '---'), ''].join('|'),
        ...rows.map(([name, type, ...rest]) =>
          ['', name, `<code>${type}</code>`, ...rest, ''].join('|')),
      ].join('\n');
    };

    const title = ({ helper, reflection, parent = reflection.parent }) => {
      const { name } = reflection;
      const { flags } = parent;
      reflection.name = name + (flags?.isOptional ? '?' : '');
      parent.flags = [];
      const title = [];
      if (flags?.isStatic) {
        title.push('static');
      }
      title.push(
        helper()
          .replaceAll('**', '')
          .replaceAll('`', '')
          .replaceAll(/\[([^\]]+)\]\(([^)]+)\)/gu, '$1')
          .replaceAll(/\\([|>])/gu, '$1')
          .trim(),
      );
      reflection.name = name;
      parent.flags = flags;
      return title.join(' ');
    };

    const {
      comment,
      declarationTitle,
      hierarchy,
      parameterTable,
      propertyTable,
      reflectionPath,
      signatureTitle,
      toc,
      type,
    } = Handlebars.helpers;

    Handlebars.registerHelper('comment', function (parts) {
      const [first, ...rest] = comment(parts).split('\n');
      const indent = Math.min(
        ...rest
          .map((line) => line.length - line.trimStart().length)
          .filter((diff) => diff !== 0),
      );
      return fixUrl(
        [
          first.trim(),
          ...rest.map((line) => line.slice(indent === Infinity ? 0 : indent)),
        ].join('\n'),
      );
    });

    Handlebars.registerHelper('comments', (model) => {
      const comments = [
        Handlebars.helpers.summary(model),
        Handlebars.helpers.tags(model),
      ];
      return comments.join(comments.includes('') ? '' : '\n');
    });

    Handlebars.registerHelper('declarationTitle', function () {
      return title({
        helper: declarationTitle.bind(this),
        reflection: this,
        parent: this,
      });
    });

    Handlebars.registerHelper('hierarchy', function (level) {
      const lines = hierarchy.call(this, level).split('\n\n');
      if (!this.isTarget) {
        this.types.forEach((type, i) => {
          const symbol = level > 0 ? `!spaces  ${'↳'.repeat(level)}` : '-'
          const parent = Handlebars
            .helpers
            .reflectionPath
            .call({ model: type.reflection })
            ?.slice?.(0, -type.name.length);
          lines[i] = `${symbol} ${parent ?? ''}<code>${
            lines[i].slice(symbol.length + 1)
          }</code>`;
        });
      }
      return lines.join('\n\n');
    });

    Handlebars.registerHelper('parameterTable', function () {
      return table(parameterTable.bind(this));
    });

    Handlebars.registerHelper('path', function () {
      if (this.reflection) {
        const reflection = this.reflection instanceof SignatureReflection
          ? this.reflection.parent
          : this.reflection;
        const path = (
          Handlebars.helpers.reflectionPath.call({ model: reflection }) ?? ''
        ).slice(0, -reflection.name.length);
        const url = Handlebars.helpers.relativeURL(reflection.url);
        return `${path}[${reflection.name}](${url})`;
      } else {
        return this.toString();
      }
    });

    Handlebars.registerHelper('propertyTable', function() {
      return table(propertyTable.bind(this));
    });

    Handlebars.registerHelper('referenceMember', function () {
      const referenced = this.tryGetTargetReflectionDeep();
      if (!referenced) {
        return `Re-exports ${this.name}`;
      }
      return `${
        this.name === referenced.name ? 'Re-exports' : 'Renames and re-exports'
      } ${
        Handlebars.helpers.path.call({ reflection: referenced })
      }`;
    });

    Handlebars.registerHelper('reflectionPath', function () {
      return reflectionPath
        .call(this)
        ?.replaceAll?.(/(\[[^\]]+\]\([^)]+\))\./gu, '$1**.**');
    });

    Handlebars.registerHelper('signatureTitle', function (accessor) {
      return title({
        helper: signatureTitle.bind(this, accessor, false),
        reflection: this,
      });
    });

    Handlebars.registerHelper('summary', function ({ summary } = {}) {
      return summary
        ? Handlebars
            .helpers
            .comment(summary)
            .replace('[[include:README.md]]', '')
        : '';
    });

    Handlebars.registerHelper('tags', ({ blockTags } = {}) => {
      return blockTags
        ?.filter(({ tag }) => tag !== '@returns')
        ?.flatMap?.(({ tag, content }) => [
            `<dt>${
              tag
                .replace(/^@(\w)/u, (m, c) => c.toUpperCase())
                .replaceAll(/[A-Z]/gu, ' $&')
            }</dt>`,
            '<dd><p>',
            '',
            Handlebars.helpers.comment(content),
            '',
            '</p></dd>',
          ])
        ?.join?.('\n') ?? '';
    });

    Handlebars.registerHelper('toc', function () {
      return toc.call(this)?.replace?.(/(?<=^## Table of )c/u, 'C');
    });

    Handlebars.registerHelper('type', function (collapse) {
      return type.call(this, collapse, false).replaceAll('`', '');
    });

    Handlebars.registerHelper('typeReferences', function () {
      return [
        ...Handlebars.helpers.type.call(this.type, undefined, false)
          .matchAll(/\[(.*?)\]\((.*?)\)/gu)
      ].map(([, name, url]) => ({ name, url }));
    });
  }
}

Object.defineProperty(module.exports, 'load', {
  value: (app) => {
    load(app);
    app.renderer.themes.set('markdown', Theme);
  },
});

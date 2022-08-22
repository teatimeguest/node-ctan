//
// Config
//

const path = require('path');

const rootdir = path.dirname(process.env.npm_package_json);
const tag = 'v' + process.env.npm_package_version;
const publicdir = path.join(rootdir, 'public');

module.exports = {
  extends: path.join(__dirname, 'typedoc.json'),
  gitRevision: tag,
  includes: [rootdir],
  markedOptions: {
    get baseUrl() {
      const { execFileSync } = require('child_process');
      const { url } = JSON.parse(
        execFileSync('npm', ['repo', '--browser=false', '--json']),
      );
      return path.posix.join(url, 'blob', tag, '/');
    },
  },
  out: path.join(publicdir, tag),
  plugin: [__filename],
};

//
// Theme
//

const assert = require('assert/strict');
const {
  DeclarationReflection,
  DefaultTheme,
  DefaultThemeRenderContext,
  JSX: { Fragment, Raw, createElement: $ },
  ReferenceReflection,
  Renderer: { EVENT_BEGIN, EVENT_END },
} = require('typedoc');

class Context extends DefaultThemeRenderContext {
  constructor(theme, options) {
    super(theme, options);
    Object.assign(super.constructor.prototype, this);
    Object.getOwnPropertyNames(this).forEach((prop) => delete this[prop]);
  }

  blockTags({ comment }) {
    if (comment?.blockTags?.length) {
      comment = comment.clone();
      comment.summary = [];
      let returns = comment.getTag('@returns');
      if (returns) {
        returns = $('div', { class: 'tsd-comment tsd-typography tsd-returns' },
          $(Raw, { html: this.markdown(returns.content) }),
        );
        comment.removeTags('@returns');
      }
      let others = null;
      if (comment.hasVisibleComponent()) {
        others = $('dl', { class: 'tsd-comment tsd-typography' },
          comment.blockTags.map(({ content, tag }) => $(Fragment, null,
            $('dt', null,
              $('h4', null,
                tag
                  .replace(/^@(\w)/u, (m, c) => c.toUpperCase())
                  .replaceAll(/[A-Z]/gu, ' $&'),
              ),
            ),
            $('dd', null, $(Raw, { html: this.markdown(content)})),
          )),
        );
      }
      return $(Fragment, null, returns, others);
    }
  }

  comment(props) {
    if (props.comment?.hasVisibleComponent?.()) {
      return $(Fragment, null,
        this.summary(props),
        this.blockTags(props),
      );
    }
  }

  header(props) {
    const elem = super.header(props);
    elem.children[1] = this.heading(
      props.model instanceof DeclarationReflection ? props.model : null,
      elem.children[1],
    );
    return elem;
  }

  heading(props, heading) {
    const sources = props?.sources?.flatMap?.(({ url: href }) => {
      return href ? [$('li', null, $('a', { href }, '[src]'))] : [];
    });
    if (!(sources?.length)) {
      return heading;
    }
    return $('div', { class: 'tsd-heading' },
      heading,
      $('ul', { class: 'tsd-sources' }, sources),
    );
  }

  member(props) {
    const elem = super.member(props);
    elem.children[1] = this.heading(props, elem.children[1]);
    if (props instanceof ReferenceReflection) {
      const {
        props: attrs,
        children: [, { children: [heading] }, reference],
      } = elem;
      attrs.class = attrs.class.replace(/^tsd-panel /u, '');
      heading.tag = 'h4';
      elem.children[2] = $('aside', { class: 'tsd-aside' }, reference);
    }
    return elem;
  }

  memberSignatureBody(props) {
    const elem = super.memberSignatureBody(props, this.options);
    elem.children[1] = this.summary(props);
    elem.children.splice(elem.children.length - 1, 0, this.blockTags(props));
    return elem;
  }

  memberSources(props) {
    const sources = props.sources;
    props.sources = sources.filter(({ url }) => !url);
    const elem = super.memberSources(props);
    props.sources = sources;
    return elem;
  }

  summary({ comment: { summary } = {} }) {
    if (summary?.some?.(({ kind, text }) => kind !== 'text' || text !== '')) {
      return $('div', { class: 'tsd-comment tsd-typography' },
        $(Raw, { html: this.markdown(summary) }),
      );
    }
  }
}

const styles = String.raw`
.tsd-sources li {
  display: inline;
}
.tsd-heading {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.tsd-heading ul.tsd-sources {
  display: inline-block;
  flex-grow: 0;
  float: right;
  font-size: 1rem;
  margin: 0.67rem 0;
}
.tsd-comment dt > h4,
dt.tsd-member > h4 {
  font-size: 1.05rem;
}
div.tsd-returns,
dl.tsd-comment > dd,
.tsd-member-group > dl > dd,
ul.tsd-parameter-list,
ul.tsd-type-parameter-list {
  margin-left: 20px;
}
.tsd-aside,
aside.tsd-sources {
  padding-left: 1rem;
  color: var(--color-text-aside);
  border-left: 0.25rem solid var(--color-accent);
}
section.tsd-kind-reference {
  margin-bottom: 1rem;
}
.tsd-hierarchy {
  line-height: 1.667rem;
}`;

class Theme extends DefaultTheme {
  #context = new Context(this, this.application.options);

  constructor(renderer) {
    super(renderer);
    const { rmSync, mkdirSync, symlinkSync, writeFileSync } = require('fs');
    const latest = path.join(publicdir, 'latest');
    renderer.on({
      [EVENT_BEGIN]: () => {
        rmSync(latest, { force: true, recursive: true });
      },
      [EVENT_END]: () => {
        const css = path.join(publicdir, tag, 'assets', 'style.css');
        writeFileSync(css, styles, { flag: 'a+' });
        symlinkSync(tag, latest, 'dir');
      },
    });
  }

  getRenderContext() { return this.#context; }
}

Object.defineProperty(module.exports, 'load', {
  value: (app) => {
    app.renderer.themes.set('default', Theme);
    const warn = app.logger.warn.bind(app.logger);
    app.logger.warn = (text, node) => {
      if (!text.startsWith('\nUnsupported highlight language')) {
        warn(text, node);
      }
    };
  },
});

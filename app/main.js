/**
 * Created by realm on 2017/3/9.
 */

Reveal.initialize({
  width: '90%',
  height: '90%',
  dependencies: [
    {
      src: './node_modules/reveal.js/plugin/markdown/marked.js',
      condition: function () {
        return !!document.querySelector('[data-markdown]');
      }
    },
    {
      src: './node_modules/reveal.js/plugin/markdown/markdown.js',
      condition: function () {
        return !!document.querySelector('[data-markdown]');
      }
    },
    {
      src: './node_modules/reveal.js/plugin/highlight/highlight.js',
      async: true,
      callback: function () {
        hljs.initHighlightingOnLoad();
      }
    }
  ]
});
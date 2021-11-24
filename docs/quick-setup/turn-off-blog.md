---
sidebar_position: 3
---

# Turn Off Blog

Blog in a docs site is useful for release notes, updates etc. But it can be turned off by following steps below, or you can just temporarily hide the blog by removing posts in `blog` directory and remove the links to blog in navbar and footer.

If you prefer to keep blog, forward to the following sections:

- [Translate Site](./translate-site.md)
- [Deploy Your Site](./deploy.md)

However, if you would like to remove blog feature completely, continue.

## Remove settings for blog

Remove the following highlightend lines.

```diff {4-10,16-21} title="docusaurus.config.js"
const config = {
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
-      // whether to index blog pages
-      indexBlog: true,
-
-      // must start with "/" and correspond to the routeBasePath configured for the blog plugin
-      // use "/" if you use blog-only-mode
-      // (see https://v2.docusaurus.io/docs/2.0.0-alpha.70/blog#blog-only-mode)
-      blogRouteBasePath: '/blog',
    }]
  ],
  presets: [
    [
      /** @type {import('@docusaurus/preset-classic').Options} */
-        blog: {
-          showReadingTime: true,
-          // Please change this to your repo.
-          editUrl:
-            'https://github.com/arisac/docusaurus-boilerplate/edit/main/blog/',
-        },
      }),
    ],
  ],
};
```

## Remove links to blog

If you have docs or pages linked to blog, remove the links from the file.

And finally, remove links in navbar and footer. Some pre-configs in this template is highlightened:

```diff {6,13-16}title="docusaurus.config.js"
const config = {
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
-        items: [{ to: "/blog", label: "Blog", position: "left" }],
      },
      footer: {
        links: [
          {
            title: "More",
            items: [
-              {
-                label: "Blog",
-                to: "/blog",
-              },
            ],
          },
        ],
      },
    }),
};
```

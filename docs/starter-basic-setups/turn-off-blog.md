---
sidebar_position: 3
---

# Turn Off Blog Feature

If you prefer to have blogs, skip this part. Another way to turn off blog temperarily is to remove blog from all links. Then move to the next section: XXXX

However, if you would like to remove blog feature completely, continue on.

## Remove settings for blog

Remove the following highlightend lines.

```js {4-10,16-21}title="docusaurus.config.js"
const config = {
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
      // whether to index blog pages
      indexBlog: true,

      // must start with "/" and correspond to the routeBasePath configured for the blog plugin
      // use "/" if you use blog-only-mode
      // (see https://v2.docusaurus.io/docs/2.0.0-alpha.70/blog#blog-only-mode)
      blogRouteBasePath: '/blog',
    }]
  ],
  presets: [
    [
      /** @type {import('@docusaurus/preset-classic').Options} */
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/arisac/docusaurus-boilerplate/edit/main/blog/',
        },
      }),
    ],
  ],
};
```

## Remove links to blog

If you have docs or pages linked to blog, remove the links from the file.

And finally, remove links in navbar and footer. Some pre-configs in this template is highlightened:

```js {7,15-18}title="docusaurus.config.js"
const config = {
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        items: [{ to: "/blog", label: "Blog", position: "left" }],
      },
      footer: {
        links: [
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
      },
    }),
};
```

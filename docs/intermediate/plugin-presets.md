---
sidebar_position: 2
description: Plugin Presets for Docs, Blog etc.
---

# Plugin Presets

## Docs

### Edit Url

Remove the **highlighted line** will turn off this feature.

```js title="docusaurus.config.js" {6,7}
const config = {
  presets: [
    [
      ({
        docs: {
          editUrl:
            "https://github.com/arisac/docusaurus-boilerplate/edit/main/",
        },
      }),
    ],
  ],
};
```

### Last Update

Remove the **highlighted line(s)** will turn off this feature.

```js title="docusaurus.config.js" {6,7}
const config = {
  presets: [
    [
      ({
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
      }),
    ],
  ],
};
```

### Breadcrumbs

Remove the **highlighted line** will turn off this feature.

```js title="docusaurus.config.js" {6}
const config = {
  presets: [
    [
      ({
        docs: {
          breadcrumbs: true,
        },
      }),
    ],
  ],
};
```

## Blog

### Edit Url

Remove the **highlighted line** will turn off this feature.

```js title="docusaurus.config.js" {6,7}
const config = {
  presets: [
    [
      ({
        blog: {
          editUrl:
            'https://github.com/arisac/docusaurus-boilerplate/edit/main/blog/',
        },
      }),
    ],
  ],
};
```

### Reading Time

Remove the **highlighted line** will turn off this feature.

```js title="docusaurus.config.js" {6}
const config = {
  presets: [
    [
      ({
        blog: {
          showReadingTime: true,
        },
      }),
    ],
  ],
};
```

### Blog Sidebar List Number

```js title="docusaurus.config.js" {6}
const config = {
  presets: [
    [
      ({
        blog: {
          blogSidebarCount: 10,
        },
      }),
    ],
  ],
};
```

## Other

### Announcement Bar

Remove the **highlighted line** will turn off this feature.

```js title="docusaurus.config.js" {4-8}
const config = {
  themeConfig:
    ({
      announcementBar: {
        id: 'announcementBar-0', // Increment on change
        content: `⭐️ If you like this Docusaurus Boilerplate, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/arisac/docusaurus-boilerplate">GitHub</a> and follow me on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/arisdotac" >${TwitterSvg} Twitter</a>`,
        isCloseable: true,
      },
    }),
};
```

Css style for the Announcement Bar is under `// Announcment Bar` section in `src/css/custom.scss`.

Additional fields: `backgroundColor`, `textColor`.

More @ https://docusaurus.io/docs/api/themes/configuration#announcement-bar


### Google Analytics

Uncomment the **highlighted lines** to enable Google Analytics feature.

```js title="docusaurus.config.js" {5-9}
const config = {
  presets: [
    [
      ({
        /** Google Analytics **/
        // googleAnalytics: {
        //   trackingID: 'UA-123456789-1',
        //   anonymizeIP: true,
        // },
      }),
    ],
  ],
};
```

:::caution production only

This plugin is always inactive in development and **only active in production** to avoid polluting the analytics statistics.

:::

More @ https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-analytics
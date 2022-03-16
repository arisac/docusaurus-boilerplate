---
sidebar_position: 1
---

# Quick Start

## Basic Configurations

### Site metadata

Website name (title), tagline, URL, navicon, GitHub repository configuarions are located in `docusaurus.config.js`:

```js title="docusaurus.config.js"
const config = {
  title: "Docusaurus Boilerplate", // Website Title
  tagline: "Dinosaurs are cool",
  url: "http://docusaurus-boilerplate.vercel.app",
  favicon: "img/favicon.ico",
  organizationName: "arisac", // Usually your GitHub org/user name.
  projectName: "docusaurus-boilerplate", // Usually your repo name.
};
```

### GitHub edit URL

Edit on GitHub URL is used in docs and blog. Configuarions are located at the **presets** part in `docusaurus.config.js`:

```js title="docusaurus.config.js" {7,8,12,13}
const config = {
  presets: [
    [
      {
        docs: {
          // Please change this to your repo.
          editUrl:
            "https://github.com/arisac/docusaurus-boilerplate/edit/main/",
        },
        blog: {
          // Please change this to your repo.
          editUrl:
            "https://github.com/arisac/docusaurus-boilerplate/edit/main/blog/",
        },
      },
    ],
  ],
};
```

### Navbar

Website title, logo, and navigation menus configuarions are located at the **themeConfig/navbar** part in `docusaurus.config.js`:

```js title="docusaurus.config.js"
const config = {
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Docusaurus Boilerplate",
        logo: {
          alt: "Docusaurus Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "start",
            position: "left",
            label: "Let's Start",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/arisac/docusaurus-boilerplate",
            label: "GitHub",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
    }),
};
```

### Footer

Links in footer, copyright notice configuarions are located at the **themeConfig/footer** part in `docusaurus.config.js`:

```js title="docusaurus.config.js"
const config = {
  themeConfig: {
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Let's Start",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Docusaurus Boilerplate. Built with Docusaurus.`,
    },
  },
};
```

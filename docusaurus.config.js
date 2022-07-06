// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/palenight');
const darkCodeTheme = require('prism-react-renderer/themes/palenight');

const TwitterSvg =
  '<svg style="fill: #1DA1F2; vertical-align: middle;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docusaurus Boilerplate',
  tagline: 'Dinosaurs are cool',
  url: 'http://docusaurus-boilerplate.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'arisac', // Usually your GitHub org/user name.
  projectName: 'docusaurus-boilerplate', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      fr: {
        label: 'Français',
        direction: 'ltr',
        htmlLang: 'fr-FR',
      },
    },
  },

  plugins: [
    'docusaurus-plugin-sass',

    [require.resolve('@cmfcmf/docusaurus-search-local'), {
      // whether to index docs pages
      indexDocs: true,

      // Whether to also index the titles of the parent categories in the sidebar of a doc page.
      // 0 disables this feature.
      // 1 indexes the direct parent category in the sidebar of a doc page
      // 2 indexes up to two nested parent categories of a doc page
      // 3...
      //
      // Do _not_ use Infinity, the value must be a JSON-serializable integer.
      indexDocSidebarParentCategories: 3,

      // whether to index blog pages
      indexBlog: true,

      // whether to index static pages
      // /404.html is never indexed
      indexPages: true,

      // language of your documentation, see next section
      language: ["en", "fr"],

      // setting this to "none" will prevent the default CSS to be included. The default CSS
      // comes from autocomplete-theme-classic, which you can read more about here:
      // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
      style: undefined,

      // lunr.js-specific settings
      lunr: {
        // When indexing your documents, their content is split into "tokens".
        // Text entered into the search box is also tokenized.
        // This setting configures the separator used to determine where to split the text into tokens.
        // By default, it splits the text at whitespace and dashes.
        //
        // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
        tokenizerSeparator: /[\s\-]+/,
        // https://lunrjs.com/guides/customising.html#similarity-tuning
        //
        // This parameter controls the importance given to the length of a document and its fields. This
        // value must be between 0 and 1, and by default it has a value of 0.75. Reducing this value
        // reduces the effect of different length documents on a term’s importance to that document.
        b: 0.75,
        // This controls how quickly the boost given by a common word reaches saturation. Increasing it
        // will slow down the rate of saturation and lower values result in quicker saturation. The
        // default value is 1.2. If the collection of documents being indexed have high occurrences
        // of words that are not covered by a stop word filter, these words can quickly dominate any
        // similarity calculation. In these cases, this value can be reduced to get more balanced results.
        k1: 1.2,
        // By default, we rank pages where the search term appears in the title higher than pages where
        // the search term appears in just the text. This is done by "boosting" title matches with a
        // higher value than content matches. The concrete boosting behavior can be controlled by changing
        // the following settings.
        titleBoost: 5,
        contentBoost: 1,
        parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
      }
    }]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/arisac/docusaurus-boilerplate/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: {
          blogTitle: 'Blog!',
          blogDescription: 'A Docusaurus powered blog!',
          postsPerPage: 10, // number / 'ALL'
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/arisac/docusaurus-boilerplate/edit/main/blog/',
          blogSidebarCount: 10,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        /** Google Analytics **/
        // googleAnalytics: {
        //   trackingID: 'UA-123456789-1',
        //   anonymizeIP: true,
        // },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: false,
        title: 'Docusaurus Boilerplate',
        logo: {
          alt: 'Docusaurus Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/quick-start',
            position: 'left',
            label: 'Quick Start',
          },
          {
            to: '/intermediate',
            position: 'left',
            label: 'Intermediate',
          },
          {
            to: '/extras',
            position: 'left',
            label: 'Extras',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/arisac/docusaurus-boilerplate',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Let\'s Start',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Docusaurus Boilerplate. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'announcementBar-0', // Increment on change
        content: `⭐️ If you like this Docusaurus Boilerplate, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/arisac/docusaurus-boilerplate">GitHub</a> and follow me on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/arisdotac" >${TwitterSvg} Twitter</a>`,
        isCloseable: true,
      },
      docs: {
        sidebar: {
          hideable: true
        },
      },
    }),
};

module.exports = config;

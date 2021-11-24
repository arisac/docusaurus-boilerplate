---
sidebar_position: 4
---

# Translate Site

This section will cover:

- Basics on Translation in Docusaurus
- Pre-configs for Chinese Lanugages (zh)
- Add/remove a language
  - Docs location
  - Blog posts location
  - Pages location
- Translate default strings, navbar and footer, theme etc.

## Basics on Translation in Docusaurus

This template has a French translation for docs, but only one doc, `i18n/fr/docusaurus-plugin-content-docs/start.md`, is translated.

Because **English** is set to the _default_ language, for other languages, if there is no translation file, the **English** one will be used.

## Pre-configs for Chinese Lanugages (zh) 🇨🇳🇭🇰🇲🇴🇹🇼🇸🇬

This boilerplate is using a Local Search plugin with index for Chinese (zh) support pre-configurated.

The local search plugin uses `nodejieba` to index Chinese language. It requires specified nodejs versions, and this is pre-configured in `.nvmrc` file.

If you won't be doing Chinese translation or using other search index services, you can remove `.nvmrc` file and remove `nodejieba` from your project:

```bash
yarn remove nodejieba
```

## Add/remove a language

### Configure i18n

Update `defaultLocale` and `locales` in docusaurus config file

- defaultLocale: default language
- locales: languages in this site

```js {3,4}title="docusaurus.config.js"
const config = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
```

Update search setting in docusaurus config file

```js {5} title="docusaurus.config.js"
const config = {
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
      // language of your documentation, see next section
      language: ["en", "fr"],
    }]
  ],
```

### Translate a doc

Docs for `fr` are placed under `i18n/fr/docusaurus-plugin-content-docs/current/`

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

Translate `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` in French.

### Translate a blog post

Blog posts for `fr` are placed under `i18n/fr/docusaurus-plugin-content-blog`

Copy your blog Markdown files to `i18n/fr/docusaurus-plugin-content-blog`, and translate them:

### Translate pages

Pages for `fr` are placed under `i18n/fr/docusaurus-plugin-content-pages`

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-pages
cp -r src/pages/**.md i18n/fr/docusaurus-plugin-content-pages
cp -r src/pages/**.mdx i18n/fr/docusaurus-plugin-content-pages
```

## Translate other strings

Translate Navbar, Footer, Global strings in Docs and Blog, i18n strings in code is a ton of works. This template is using `docusaurus-theme-classic`, and it should be no setup for the UI translation out of the box.

Docusaurus provide a quick way to generate json files for all strings supports i18n by running:

```bash
# replace `fr` for your desired language
yarn run write-translations -- --locale fr
```

This will generate the following files:

```diff {5,8,11,12,14}
  project-root
  ├── i18n
  │   └── fr
  │       ├── docusaurus-plugin-content-blog
+ │       │   └── options.json
  │       │
  │       ├── docusaurus-plugin-content-docs
+ │       │   └── current.json
  │       │
  │       └── docusaurus-theme-classic
+ │       │   ├── footer.json
+ │       │   └── navbar.json
  │       │
+ │       └── code.json
  .
```

You can continue translating other strings with the generated json files.

## Run local dev server in another language

```bash
yarn start -- --locale fr
```

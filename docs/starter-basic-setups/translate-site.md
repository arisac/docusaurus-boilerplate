---
sidebar_position: 4
---

# Translate Site

This section will cover:

- Some Basics
- Special config for Chinese (zh)
- Add/remove a language
  - Docs location
  - Blog posts location
  - Pages location
- Translate default strings, navbar and footer, theme etc.

## Some Basics

This template has a French translation for docs, but only one `i18n/fr/docusaurus-plugin-content-docs/intro.md` is translated. Because **English** is set as the _default_ language, for other languages, if there is no translation file, the **English** one will be used.

## Special config for Chinese (zh)

The local search plugin in this template use `nodejieba` to index Chinese language. It requires specified nodejs versions, and this is pre-configured in `.nvmrc` file.

If you won't be doing Chinese translation, you have remove `.nvmrc` file and remove `nodejieba` from your project by using:

```bash
yarn remove nodejieba
```

## Add/remove a language

### In site configs

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

### Docs location

### Blog post location

### Pages location

## Translate other strings

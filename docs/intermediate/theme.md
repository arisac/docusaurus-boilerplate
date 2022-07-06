---
sidebar_position: 3
description: Theme Color, Custom CSS, Custom Themes
---

# Theme

## Light/Dark Mode

```js title="docusaurus.config.js" {4-6}
const config = {
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
};
```

## Code Block Theme

```js title="docusaurus.config.js"
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
```

## Custom CSS

See `src/css/custom.scss`

## Theme Appearances

Theme Profiles are WIP. To change to a different theme profile:

```scss {2} title="src/css/custom.scss"
// Change Theme Appearance Profile
@import "themes/pure";
```

To edit an existing theme, create a file without the leading `_`.

E.g.

- `cp ./src/css/themes/_theme_base.scss ./src/css/themes/theme_base.scss`
- `cp ./src/css/themes/_pure.scss ./src/css/themes/pure.scss`
- `cp ./src/css/themes/_classic.scss ./src/css/themes/classic.scss`

### Pure (default)

To make a cleaner appearance for Docusaurus.

Since Docusaurus is currently in `beta`, this theme is also `WIP` and will keep updating.

```scss {2} title="src/css/custom.scss"
// Change Theme Appearance Profile
@import "themes/pure";
```

### Classic

Minimal change for **Docusaurus Classic Theme**

```scss {2} title="src/css/custom.scss"
// Change Theme Appearance Profile
@import "themes/classic";
```

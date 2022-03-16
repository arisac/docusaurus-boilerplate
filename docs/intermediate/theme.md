---
sidebar_position: 2
---

# Theme

## Color Mode

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

```js {4,5} title="docusaurus.config.js"
const config = {
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
  },
};
```

## Custom CSS Presets

See `src/css/custom.scss`

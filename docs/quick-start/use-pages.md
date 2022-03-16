---
sidebar_position: 3
---

# Use Pages

Docusaurus support `MD/MDX/JS/JSX/TSX` format for pages.

Files under `src/pages` will be treated as site pages.

## Creating Pages

### MD Example

Create a file named `demo-page.md` under `src/pages/`.

<details><summary>Click to see MD example code</summary>

```markdown title="src/pages/demo-page.md"
---
# Frontmatter, can be empty.
# Will use site title if empty.
title: Page Title
---

# Markdown Page

This is a Markdown page
```

</details>

### MDX Example

Docusaurus has built-in support for [MDX v1](https://mdxjs.com/), which allows you to write JSX within your Markdown files and render them as React components.

Create a file named `demo-page.mdx` under `src/pages/`.

<details><summary>Click to see MDX example code</summary>

```markdown title="src/pages/demo-page.mdx"
---
title: Page Title
---

export const Highlight = ({children, color}) => (
<span
style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
{children}
</span>
);

# MDX Page

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.
```

</details>

### TSX Example

Create a file named `demo-page.tsx` under `src/pages/`. Docusaurus is based on react, so you can build pages as a react page.

<details><summary>Click to see TSX example code</summary>

```tsx title="src/pages/demo-page.tsx"
import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary")}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div>
          <Link className="button" to="/docs/start">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Page(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>This is a Homepage using TSX</main>
    </Layout>
  );
}
```

</details>

## Use Page for Homepage

Since most project has it's own website, and people sometimes just need to quick start a docs site, this template is pre-configurated for docs focused site. The `docs` is at the root for this website.

### 1. Create a homepage file

File named `index` under `src/pages` will be treated as site homepage by default.

This can be in `MD/MDX/JS/JSX/TSX` format.

<details><summary>Click to see MD example code</summary>

```markdown title="src/pages/index.md"
---
title: Home
---

# Markdown Page

This is a Markdown page
```

</details>

### 2. Update default docs file

Currently this template use `docs/start.md` as homepage.

Remove `slug: /` in the frontmatter and save the file:

```diff {3} title="docs/start.md"
---
sidebar_position: 1
- slug: /
---
```

### 3. Change docs route path

Change the line of `routeBasePath: '/'` under docs presets:

```diff {7,8} title="docusaurus.config.js"
const config = {
  presets: [
    [
      'classic',
      ({
        docs: {
-          routeBasePath: '/',
+          routeBasePath: '/docs',
        },
      }),
    ],
  ],
};
```

### 4. Update links

Check for other files if there are links require to be updated.

### 5. Check

```bash
yarn start
```

Your website should be running with your new homepage and docs under `/docs`.

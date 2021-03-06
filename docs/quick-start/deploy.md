---
sidebar_position: 6
---

# Deploy your site

Docusaurus is a **static-site-generator** (also called **[Jamstack](https://jamstack.org/)**).

It builds your site as simple **static HTML, JavaScript and CSS files**.

## Build your site

Build your site **for production**:

```bash
npm run build
```

The static files are generated in the `build` folder.

## Deploy your site

Test your production build locally:

```bash
npm run serve
```

The `build` folder is now served at `http://localhost:3000/`.

You can now deploy the `build` folder **almost anywhere**.

## Deploy to Hostings

There are many great hosting services to serve static sites generated by Docusaurus, here's some recommendations:

### Vercel

The demo of this boilerplate is hosted on Vercel 👉 [docusaurus-boilerplate.vercel.app](https://docusaurus-boilerplate.vercel.app)

This is the simplest way to host your site with almost zero-extra setup.

By default, the project will be hosted with a domain like `project-name.vercel.app` using Vercel's CDNs.

- Simply log into vercel using your GitHub account
- Create a new Project and select your GitHub repository
- Set a project name and just click **Deploy**

For every push happened to `main` branch, vercel will rebuild the production site. And for pushes in other branches and PRs, vercel will also create a build with a unique link to preview the built site.

- [Visit Vercel](https://vercel.com/)

### GitHub Pages

A Github Actions to automatically deploy to GitHub Pages is included with this template.

Rename `.github/workflows/deploy.yml.disabled` to `.github/workflows/deploy.yml` to make it work. 

You may have to manually enable GitHub Actions for your repository depending on the repository's security settings.

It will work out of the box and deploy for every push on the `main` branch to `gh-pages` branch.

To use a custom domain, uncomment _line 53_ and change the domain, this will create a cname file in under `gh-pages` branch for GitHub Pages to auto-config to your domain. It is recommended to set the domain in this config file rather than create a cname file manually in the repo.

```diff title="deploy.yml"
-          # cname: docusaurus-boilerplate.aris.ac
+          cname: your.domain.name
```

### 4EVERLAND

A demo of this boilerplate is also hosted on 4EVERLAND 👉 [docusaurus-boilerplate.4everland.app](https://docusaurus-boilerplate.4everland.app/)

The setup and build experience on 4EVERLAND is quite similar to Vercel. The differenct is 4EVERLAND is focused on web 3.0 and actually stores the built sites on IPFS than it's own servers. Each built has an IPFS CID and can be accessed for other IPFS nodes or IPFS gateways.

By default, the project will be hosted with a domain like `project-name.4everland.app` using 4EVERLAND's IPFS gateway and CDNs.

- [Visit 4EVERLAND](https://4everland.org)


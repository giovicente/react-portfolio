# React Portfolio

A personal portfolio showcasing coding projects, engineering experience, and expertise in artificial intelligence. Built with React and Vite and hosted on GitHub Pages.

## Live site

[View the portfolio](https://giovicente.github.io/react-portfolio/)

## Prerequisites

- **Node.js and npm:** required to install dependencies, run the development server, and build the site. npm is included with Node.js. The project has been tested with Node.js `24.21.0` and npm `11.19.0`.
- **Git:** required to clone the repository, track changes, and deploy using the `gh-pages` package.
- **Web browser:** to view and test the site.
- **Code editor:** such as VS Code, to edit the source files.

React, Vite, Tailwind CSS, and all other project dependencies are installed through npm. There is no need to install them separately.

The examples below use PowerShell on Windows. Run each command on its own line, pressing Enter after each one. We use `npm.cmd` to avoid potential PowerShell restrictions on running `npm.ps1`. In other shells, you can use `npm` instead.

Check your installed tools:

```powershell
node --version
npm.cmd --version
git --version
```

## Setup

If you do not have a local copy yet, clone the repository:

```powershell
git clone https://github.com/giovicente/react-portfolio.git
cd react-portfolio
```

If you already have a local copy, open the existing project folder:

```powershell
cd C:\Users\gvgen\projects\react-portfolio
```

Install the dependencies using the versions recorded in `package-lock.json`:

```powershell
npm.cmd ci
```

Run this installation step whenever you set up a fresh copy or pull changes that update the project's dependencies.

## Run locally

From the project folder, start the development server:

```powershell
npm.cmd run dev
```

Open the URL shown in the terminal, usually `http://localhost:5173`. Changes to the source files appear automatically in the browser. Keep the terminal open while using the site, and press **Ctrl+C** to stop the server.

## Build and preview

Build the production files into the `dist/` folder:

```powershell
npm.cmd run build
```

Preview the production build locally:

```powershell
npm.cmd run preview
```

Open the URL shown in the terminal. Since the build uses the GitHub Pages base path, visit `/react-portfolio/` at that address, usually `http://localhost:4173/react-portfolio/`. Press **Ctrl+C** to stop the preview server.

## Git workflow and deployment

The `main` branch holds the source code. The `gh-pages` branch holds the compiled files published to GitHub Pages.

1. Make your changes locally, either on `main` or on a working branch.
2. Test with `npm.cmd run dev` and check that the project builds with `npm.cmd run build`.
3. Review, commit, and push your changes. If you used a working branch, merge it into `main` before deploying.
4. With your local `main` branch up to date and no uncommitted changes, run:

   ```powershell
   npm.cmd run deploy
   ```

The deploy command automatically builds the project through the `predeploy` script, then pushes the contents of `dist/` to the `gh-pages` branch. You do not need to switch to that branch or edit it manually. You may be asked to sign in to GitHub the first time you deploy from a new computer.

**Deployment uses your local files, including uncommitted changes.** Commit your changes and sync `main` before deploying to keep the published site aligned with the versioned source code. Pushing to `main` alone does not automatically run this deployment.

For this workflow, the repository's **Settings > Pages** configuration should use **Deploy from a branch**, with **`gh-pages`** as the branch and **`/ (root)`** as the folder. After deploying, monitor the publishing status in the repository's **Actions** tab and check the live site.

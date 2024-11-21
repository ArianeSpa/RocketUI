# RocketUI <a class="anchor" name="up" id="up"></a>

**RocketUI** is my first UI library ! It is built with styled-components, use can use the default theme or use a custom theme you've designed.

[![node](https://img.shields.io/badge/node-v20.13.0-398337)](https://nodejs.org/en)
[![npm](https://img.shields.io/badge/npm-v10.5.2-CD0100)](https://docs.npmjs.com/cli/v10/commands?v=true)

[![react](https://img.shields.io/badge/react-v18.3.1-2F74C0)](https://react.dev/)
[![typescript](https://img.shields.io/badge/typescript-v5.6.3-2F74C0)](https://www.typescriptlang.org/)
[![styled-components](https://img.shields.io/badge/styled--components-v6.4.13-2F74C0)](https://styled-components.com/)

[![storybook](https://img.shields.io/badge/storybook-v8.4.2-F74581)](https://storybook.js.org/)
[![rollup](https://img.shields.io/badge/rollup-v4.25.0-DA3336)](https://rollupjs.org/)

[![eslint](https://img.shields.io/badge/eslint-v8.57.1-015E76)](https://eslint.org/)
[![prettier](https://img.shields.io/badge/prettier-v3.3.3-015E76)](https://prettier.io/)
[![husky](https://img.shields.io/badge/husky-v9.1.6-015E76)](https://typicode.github.io/husky/)
[![lint staged](https://img.shields.io/badge/lint_staged-v15.2.10-015E76)](https://github.com/okonet/lint-staged)

## Table of Contents

- [🔰 1. Getting Started](#getting_started)

  - [Prerequisite](#prerequisite)
  - [Installation](#installation)

- [🧱 2. How to use RocketUI](#usage)

- [📓 3. Notes](#notes)

<br><br>

## 🔰 1. Getting Started <a class="anchor" name="getting_started" id="getting_started"></a> <span>[🔝](#up)</span>

### Prerequisite : <a class="anchor" name="prerequisite" id="prerequisite"></a> <span>[🔝](#up)</span>

<br>

|        | Version |
| ------ | ------- |
| NodeJs | 20.13.0 |
| Npm    | 10.5.2  |

<br>

If you're working on multiple projects, it is recommended to use NVM which is the most popular Node Version Manager. You can install it via [Chotolatey](https://chocolatey.org/)

<br>

| Dependencies      | Version |
| ----------------- | ------- |
| styled-components | 6.1.13  |

<br>

### Instalation : <a class="anchor" name="installation" id="installation"></a> <span>[🔝](#up)</span>

Install the component library

```sh
npm install react-rocket-ui
```

You can specify a specific version if needed

```sh
npm install react-rocket-ui@1.0.1
```

Peerdependencies are automatically installed.

<br>

## 🧱 2. How to use RocketUI <a class="anchor" name="usage" id="usage"></a> <span>[🔝](#up)</span>

<br>

```tsx
import { Button } from 'react-rocket-ui';

<Button onClick={handleClick}>Click</Button>;
```

You can also wrap your application in the RocketThemeProvider to pass your custom theme instead of using the default theme

```tsx
import { RocketThemeProvider } from 'react-rocket-ui';

<RocketThemeProvider theme={myCustomTheme}>
  // ... My App Content
</RocketThemeProvider>;
```

## 📓 3. Notes <a class="anchor" name="notes" id="notes"></a> <span>[🔝](#up)</span>

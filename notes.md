# [Project setup](https://outsidein.dev/vue/project-setup)
## [Creating the app](https://outsidein.dev/vue/project-setup#creating-the-app)
(quasar-cli instead of vue-cli, provides better DX than plugging quasar to existing vite project)

```text
$ yarn global add @quasar/cli
$ yarn create quasar
```

```text
√ What would you like to build? » App with Quasar CLI, let's go!
√ Pick Quasar version: » Quasar v2 (Vue 3 | latest and greatest)
√ Pick script type: » Typescript
√ Pick Quasar App CLI variant: » Quasar App CLI with Vite 2 (stable | v1)
√ Pick a Vue component style: » Composition API with <script setup>
√ Pick your CSS preprocessor: » Sass with SCSS syntax
√ Check the features needed for your project: » ESLint, State Management (Pinia), Axios
√ Pick an ESLint preset: » Prettier
```

## [Running Tests On CI](https://outsidein.dev/vue/project-setup#running-tests-on-ci)
[quasar-testing-vitest](https://testing.quasar.dev/packages/unit-vitest/) (vitest instead of jest)
```text
$ quasar ext add @quasar/testing-unit-vitest
```

[playwright](https://playwright.dev/docs/intro) (playwright instead of cypress)
```text
yarn create playwright
√ Add a GitHub Actions workflow? (y/N) · true
```
- put e2e tests into 'e2e' folder in /tests
- change playwright.config.ts 'testDir' path
- update vitest paths in config

## [Setting up automatic deployment](https://outsidein.dev/vue/project-setup#setting-up-automatic-deployment)
- [create azure static web app](https://learn.microsoft.com/en-us/azure/static-web-apps/get-started-portal?tabs=vue&pivots=github)
- change output_location in generated .yml to 'dist/spa'
-

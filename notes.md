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
- change vitest and @vitest/ui versions to '0.34.2' and @quasar/quasar-app...-vitest to '0.4.0' (as for the moment)

## [Setting up automatic deployment](https://outsidein.dev/vue/project-setup#setting-up-automatic-deployment)
- [create azure static web app](https://learn.microsoft.com/en-us/azure/static-web-apps/get-started-portal?tabs=vue&pivots=github)
- change output_location in generated .yml to 'dist/spa'

# [Vertical slice](https://outsidein.dev/vue/vertical-slice)
## [End-to-end test](https://outsidein.dev/vue/vertical-slice#end-to-end-test)

```typescript
import {test, expect} from '@playwright/test'

test('shows restaurants from the server', async ({page}) => {
  const sushiPlace = 'Sushi Place'
  const pizzaPlace = 'Pizza Place'

  await page.route('https://api.outsidein.dev/<API_KEY>/restaurants',
    async route => {
      const json = [
        {id: 1, name: sushiPlace},
        {id: 2, name: pizzaPlace}
      ]
      await route.fulfill({json})
    })

  await page.goto('/')
  await expect(page.getByText(sushiPlace)).toBeVisible()
  await expect(page.getByText(pizzaPlace)).toBeVisible()
})
```
- uncomment 'webServer' (line 72) and use.baseURL (line 27) in playwright.config.ts (change port to :9000)

## [Stepping down to a unit test](https://outsidein.dev/vue/vertical-slice#stepping-down-to-a-unit-test)
- [follow quasar docs](https://testing.quasar.dev/packages/unit-vitest/#mocking-pinia)

RestaurantList.spec.ts
```typescript
import {describe, it, expect} from 'vitest';
import {installQuasarPlugin} from '@quasar/quasar-app-extension-testing-unit-vitest';
import {mount} from '@vue/test-utils'
import {useRestaurantsStore} from 'stores/restaurants-store'
import {installPinia} from 'tests/unit/install-pinia';
import RestaurantList from 'components/RestaurantList.vue';

installQuasarPlugin();
installPinia({stubActions: false})

describe('RestaurantList', () => {
  it('loads restaurants on mount', () => {
    mount(RestaurantList)
    const store = useRestaurantsStore()

    expect(store.load).toHaveBeenCalled()
  })
})
```

- vitest.config.mts requires
```text
globals: true
```

- after completing RestaurantList.vue the test will pass
```vue
<template>
  <div>list</div>
</template>

<script lang="ts" setup>
  import {useRestaurantsStore} from 'stores/restaurants-store';

  const store = useRestaurantsStore()
  store.load()
</script>
```

restaurants-store.ts
```typescript
import {defineStore} from 'pinia';

export const useRestaurantsStore = defineStore('restaurants', {
  state: () => {
    return {
      restaurantsList: [] as RestaurantInfo[]
    }
  },
  actions: {
    load() {
      const x = () => ({});
    },
  },
});

interface RestaurantInfo {
  id: number,
  name: string
}
```

installPinia accepts `options` as a parameter, so you can set initial store values:
```typescript
installPinia({
  initialState: {
    restaurants: { // name of store
      restaurantsList: [
        {id: 1, name: 'Sushi Place'},
        {id: 2, name: 'Pizza Place'}
      ]
    },
  },
  stubActions: false
})
```

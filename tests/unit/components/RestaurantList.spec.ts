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

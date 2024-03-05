import {describe, it, expect} from 'vitest';
import {installQuasarPlugin} from '@quasar/quasar-app-extension-testing-unit-vitest';
import {mount} from '@vue/test-utils'
import {useRestaurantsStore} from 'stores/restaurants-store'
import {installPinia} from 'tests/unit/install-pinia';
import RestaurantList from 'components/RestaurantList.vue';

installQuasarPlugin();
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

describe('RestaurantList', () => {
  it('loads restaurants on mount', () => {
    mount(RestaurantList)
    const store = useRestaurantsStore()

    expect(store.load).toHaveBeenCalled()
  })

  it('displays the restaurants', () => {

    const wrapper = mount(RestaurantList)
    // const store = useRestaurantsStore()
    // @ts-ignore
    const firstRestaurantName = wrapper.findAll('[data-testid="restaurant"]').at(0).text()
    expect(firstRestaurantName).toBe('Sushi Place')
  })
})

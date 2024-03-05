import {describe, it, expect, beforeEach} from 'vitest';
import {installQuasarPlugin} from '@quasar/quasar-app-extension-testing-unit-vitest';
import {mount, VueWrapper} from '@vue/test-utils'
import {RestaurantInfo, useRestaurantsStore} from 'stores/restaurants-store'
import {installPinia} from 'tests/unit/install-pinia';
import RestaurantList from 'components/RestaurantList.vue';
import {Store} from 'pinia';

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

// TODO: typing
let wrapper: VueWrapper;
let store: Store<'restaurants', { restaurantsList: RestaurantInfo[] }, unknown, { load(): void }>;

beforeEach(() => {
  wrapper = mount(RestaurantList);
  store = useRestaurantsStore();
})

const findByTestId = (wrapper: VueWrapper, testId: string, index: number) =>
  wrapper.findAll(`[data-testid="${testId}"]`).at(index)

describe('RestaurantList', () => {
  it('loads restaurants on mount', () => {
    expect(store.load).toHaveBeenCalled()
  })

  it('displays the restaurants', () => {
    expect(findByTestId(wrapper, 'restaurant', 0)?.text()).toBe('Sushi Place')
    expect(findByTestId(wrapper, 'restaurant', 1)?.text()).toBe('Pizza Place')
  })
})

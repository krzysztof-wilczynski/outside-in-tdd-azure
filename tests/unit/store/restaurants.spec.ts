import {setActivePinia, createPinia} from 'pinia';
import {useRestaurantsStore} from 'stores/restaurants-store';
import {describe, beforeEach, it, expect} from 'vitest';

describe('Restaurants Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('load action', () => {
    it('stores the restaurants', async () => {
      const store = useRestaurantsStore()

      const records = [
        {id: 1, name: 'Sushi Place'},
        {id: 2, name: 'Pizza Place'}
      ];
      const api = {
        loadRestaurants: () => Promise.resolve(records)
      }

      await store.load(api)
      expect(store.restaurantsList).toEqual(records)
    })
  })
})

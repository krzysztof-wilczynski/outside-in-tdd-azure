import {setActivePinia, createPinia} from 'pinia';
import {useRestaurantsStore} from 'stores/restaurants-store';
import {vi, describe, it, expect, beforeEach} from 'vitest';
import api from 'src/api';

vi.mock('src/api', () => ({
  default: {
    loadRestaurants: vi.fn()
  }
}))

describe('Restaurants Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('load action', () => {
    it('stores the restaurants', async () => {
      const records = [
        {id: 1, name: 'Sushi Place'},
        {id: 2, name: 'Pizza Place'}
      ];

      vi.mocked(api.loadRestaurants).mockResolvedValueOnce(records)
      const store = useRestaurantsStore()

      await store.load()
      expect(store.restaurantsList).toEqual(records)
    })
  })
})

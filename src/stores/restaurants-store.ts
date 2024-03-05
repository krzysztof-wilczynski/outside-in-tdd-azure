import {defineStore, StoreDefinition} from 'pinia';

export const useRestaurantsStore = defineStore('restaurants', {
  state: () => {
    return {
      restaurantsList: [] as RestaurantInfo[]
    }
  },
  getters: {},
  actions: {
    load() {
      const x = () => ({});
    },
  },
});

export type RestaurantStore = typeof useRestaurantsStore

export interface RestaurantInfo {
  id: number,
  name: string
}

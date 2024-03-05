import {defineStore, StoreDefinition} from 'pinia';

export const useRestaurantsStore = defineStore('restaurants', {
  state: () => {
    return {
      restaurantsList: [] as RestaurantInfo[]
    }
  },
  getters: {},
  actions: {
    async load(api: { loadRestaurants: () => Promise<any>; }) {
      try {
        this.restaurantsList = await api.loadRestaurants()
      } catch (error) {
        console.log(error)
      }
    }
  }
});

export interface RestaurantInfo {
  id: number,
  name: string
}

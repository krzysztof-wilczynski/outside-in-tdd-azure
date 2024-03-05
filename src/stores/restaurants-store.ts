import {defineStore} from 'pinia';
import api from 'src/api';

export const useRestaurantsStore = defineStore('restaurants', {
  state: () => {
    return {
      restaurantsList: [] as RestaurantInfo[]
    }
  },
  getters: {},
  actions: {
    async load() {
      this.restaurantsList = await api.loadRestaurants()
    }
  }
});

export interface RestaurantInfo {
  id: number,
  name: string
}

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

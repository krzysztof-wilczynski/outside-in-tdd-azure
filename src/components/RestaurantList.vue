<template>
  <ul>
    <li v-for="restaurant in store.restaurantsList"
        :key="restaurant.id"
        data-testid="restaurant">
      {{ restaurant.name }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import {useRestaurantsStore} from 'stores/restaurants-store';

const store = useRestaurantsStore()
store.load()

</script>

<style lang="scss">

</style>

<template>
  <q-list>
    <q-item v-for="restaurant in store.restaurantsList"
            :key="restaurant.id"
            data-testid="restaurant">
      <q-item-section>
        <q-item-label>{{ restaurant.name }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts" setup>
import {useRestaurantsStore} from 'stores/restaurants-store';

const store = useRestaurantsStore()
store.load()

</script>

<style lang="scss">

</style>

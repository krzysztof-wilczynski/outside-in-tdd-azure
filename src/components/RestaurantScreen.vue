<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Restaurants</div>
    </q-card-section>
    <q-card-section>
      <RestaurantList/>
    </q-card-section>
  </q-card>

</template>

<script lang="ts" setup>
import RestaurantList from 'components/RestaurantList.vue';
</script>


<style scoped>

</style>

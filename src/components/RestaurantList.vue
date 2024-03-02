<template>
  <div>list</div>
</template>

<script lang="ts" setup>
import {useRestaurantsStore} from 'stores/restaurants-store';

const store = useRestaurantsStore()
store.load()
</script>

<style lang="scss">

</style>

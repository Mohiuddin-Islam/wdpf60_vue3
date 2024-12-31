<template>
  
  <NewYear/>
  <FruitItems/>
</template>

<script>

import NewYear from './components/NewYear.vue'
import FruitItems from './components/FruitItems.vue'


export default {
  name: 'App',
  components: {
    NewYear, FruitItems
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

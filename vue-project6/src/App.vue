<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/food">Food Item</RouterLink> |
        <RouterLink to="/fruit">Fruit Item</RouterLink> |
        <RouterLink to="/todo">Todo List</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>

</style>

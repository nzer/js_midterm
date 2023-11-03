<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import 'primevue/resources/themes/lara-light-teal/theme.css'
</script>

<template>
  <header>
    <h1>Twitter (X) like</h1>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
  h1 {
    margin: auto;
    width: 200px;
  }
  nav {
    height: 48px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
  }

  nav a {
    padding: 24px;
  }
</style>

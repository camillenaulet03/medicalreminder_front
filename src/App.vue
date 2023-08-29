<template>
  <v-app id="app">
    <v-main>
      <AppHeader/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  }
}
</script>

<style>
html, body {
  background-color: #F5FCFB;
}

#app {
  font-family: Verdana, sans-serif;
  margin-top: 60px;
}
</style>

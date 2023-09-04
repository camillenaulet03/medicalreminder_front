<template>
  <v-app id="app">
    <v-main>
      <AppHeader class="header"/>
      <router-view/>
      <AppFooter class="footer"/>
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
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

.header {
  background-color: #262DB7;
}
</style>

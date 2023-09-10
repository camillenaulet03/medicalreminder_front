<template>
  <v-app id="app">
    <v-main class="pt-2 pt-sm-2 pt-xs-2 pt-md-0 pt-lg-0 pt-xl-0">
      <AppHeader class="header"/>
      <div id="main-view">
        <router-view style="padding-top: 0px;"/>
      </div>
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
#app {
  font-family: Verdana, sans-serif;
  margin-top: 60px;
  background-color: #F5FCFB;
}

.header {
  background-color: #262DB7;
}

#main-view {
  padding-bottom:55px;
}
</style>

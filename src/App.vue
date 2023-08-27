<template>
  <LoginView/>
</template>

<script>
import LoginView from './views/LoginView.vue'

export default {
  name: 'App',
  components: {
    LoginView
  }
}
</script>

<style>
html, body {
  background-color: lightseagreen;
}

#app {
  font-family: Verdana, sans-serif;
  margin-top: 60px;
}
</style>

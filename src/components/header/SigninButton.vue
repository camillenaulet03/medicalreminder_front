<template>
  <router-link :to="{ name: 'login', force: true, state: { login: false } }">
    <v-btn class="header-button header-button-background"> Inscription </v-btn>
  </router-link>
</template>
<script>
export default {
  name: "SigninButton"
}
</script>
<style scoped>
.header-button {
  margin-right: 10px;
}

.header-button-background {
  background-color: #262DB7;
  color: white;
}
</style>
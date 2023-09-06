<template>
  <router-link :to="{ name: 'login', force: true }">
    <v-btn variant="outlined" class="header-button header-button-background">
      Connexion
    </v-btn>
  </router-link>
</template>
<script>
export default {
  name: "LoginButton",
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
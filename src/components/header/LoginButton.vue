<template>
  <router-link :to="{ name: 'login', force: true, state: { login: true } }">
    <v-btn variant="outlined" class="header-button" color="#F58926">
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
</style>
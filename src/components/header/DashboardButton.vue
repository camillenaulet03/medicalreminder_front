<template>
  <router-link :to="{ name: 'dashboard', force: true }">
    <v-btn class="header-button header-button-background">
      Tableau de bord
    </v-btn>
  </router-link>
</template>
<script>
export default {
  name: "DashboardButton",
}
</script>
<style scoped>
.header-button {
  margin-right: 30px;
}
</style>
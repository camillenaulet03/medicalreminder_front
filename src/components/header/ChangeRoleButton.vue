<template>
  <router-link :to="{ name: 'changeRole', force: true }">
    <v-btn variant="outlined" class="header-button header-button-background">
      Changer un rôle
    </v-btn>
  </router-link>
</template>
<script>
export default {
  name: "ChangeRoleButton",
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
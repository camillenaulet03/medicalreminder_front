<template>
  <v-btn variant="outlined" class="header-button header-button-background" @click="logout">
    Déconnexion
  </v-btn>
</template>
<script>
import router from '../../router/index.js';
import authService from "../../../services/authService";

export default {
  name: "LogoutButton",

  methods: {
    async logout() {
      const userId = await localStorage.getItem("user-id");
      await authService.logout({id: JSON.parse(userId).data})
      localStorage.removeItem("user-token");
      router.push({name: "home"});
    }
  },
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

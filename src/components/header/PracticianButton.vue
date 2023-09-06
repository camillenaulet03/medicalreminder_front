<template>
    <router-link :to="{ name: 'login', force: true }">
      <v-btn variant="outlined" class="header-button header-button-background">
        Êtes-vous praticien?
      </v-btn>
    </router-link>
  </template>
  <script>
  export default {
    name: "PracticianButton",
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
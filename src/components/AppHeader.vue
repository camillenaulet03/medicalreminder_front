<template>
  <div class="header">
    <MqResponsive target="md+">
      <v-app-bar color="#262DB7">
        <template #prepend>
          <HeaderLogo></HeaderLogo>
        </template>
        <v-spacer />
        <ChangeRoleButton v-if="isLoggedIn && isAdmin"></ChangeRoleButton>
        <CalendarLink v-if="isLoggedIn"></CalendarLink>
        <LogoutButton v-if="isLoggedIn"></LogoutButton>
        <LoginButton v-if="!isLoggedIn"></LoginButton>
        <SigninButton v-if="!isLoggedIn"></SigninButton>
      </v-app-bar>
    </MqResponsive>
    <MqResponsive target="xs-sm">
      <v-app-bar>
        <template #prepend>
          <HeaderLogo></HeaderLogo>
        </template>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer
        class="burger-menu"
        v-model="drawer"
        location="top"
        v-bind:width="isLoggedIn ? 210 : 150"
      >
        <v-row v-if="isLoggedIn && isAdmin">
          <v-col cols="12" class="text-center">
            <ChangeRoleButton></ChangeRoleButton>
          </v-col>
        </v-row>

        <v-row v-if="isLoggedIn">
          <v-col cols="12" class="text-center">
            <LogoutButton></LogoutButton>
          </v-col>
        </v-row>

        <v-row v-if="!isLoggedIn">
          <v-col cols="12" class="text-center">
            <LoginButton></LoginButton>
          </v-col>
        </v-row>

        <v-row v-if="!isLoggedIn">
          <v-col cols="12" class="text-center">
            <SigninButton></SigninButton>
          </v-col>
        </v-row>
      </v-navigation-drawer>
    </MqResponsive>
  </div>
</template>

<script>
import { MqResponsive } from "vue3-mq";
import router from "../router/index.js";
import HeaderLogo from "./header/HeaderLogo.vue";
import LoginButton from "./header/LoginButton.vue";
import SigninButton from "./header/SigninButton.vue";
import ChangeRoleButton from "./header/ChangeRoleButton.vue";
import LogoutButton from "./header/LogoutButton.vue";
import CalendarLink from "./header/CalendarLink.vue";

export default {
  name: "AppHeader",

  components: {
    MqResponsive,
    HeaderLogo,
    LoginButton,
    SigninButton,
    ChangeRoleButton,
    LogoutButton,
    CalendarLink,
  },

  data: () => ({
    drawer: false,
    isLoggedIn: false,
    isAdmin: false,
  }),

  methods: {
    toHome() {
      router.push("/");
    },
  },

  inject: ["mq"],

  mounted() {
    this.isLoggedIn = localStorage.getItem("user-token") != null;
    this.isAdmin = JSON.parse(localStorage.getItem("user-role"))["data"] == 1;
  },
};
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: inherit;
}

:deep(.burger-menu) {
  background-color: #262db7;
  padding-top: 10px;
}

v-app-bar {
  padding-left: 30px;
}
</style>

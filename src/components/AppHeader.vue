<template>
  <div class="header">
    <MqResponsive target="md+">
      <v-app-bar color="#262DB7">
        <template #prepend>
          <HeaderLogo></HeaderLogo>
        </template>
        <v-spacer />
        <ChangeRoleButton v-if="isLoggedIn && isAdmin"></ChangeRoleButton>
        <DashboardButton v-if="isLoggedIn && isDoctor"></DashboardButton>
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

        <v-row v-if="isLoggedIn && isDoctor">
          <v-col cols="12" class="text-center">
            <DashboardButton></DashboardButton>
          </v-col>
        </v-row>

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
import router from "@/router/index.js";
import HeaderLogo from "./header/HeaderLogo.vue";
import LoginButton from "./header/LoginButton.vue";
import SigninButton from "./header/SigninButton.vue";
import ChangeRoleButton from "./header/ChangeRoleButton.vue";
import DashboardButton from "./header/DashboardButton.vue";
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
    DashboardButton,
    LogoutButton,
    CalendarLink,
  },

  data: () => ({
    drawer: false,
    isLoggedIn: false,
    isAdmin: false,
    isDoctor: false,
  }),

  methods: {
    toHome() {
      router.push("/");
    },
    permissions() {
      this.emitter.on("user-token", r => {
        this.isLoggedIn = r;
      });
      const userToken = localStorage.getItem('user-token');
      if (userToken !== 'undefined' && userToken !== null) {
        const parsedData = JSON.parse(userToken);
        const timestamp = parsedData.timestamp;
        const currentTime = Date.now();
        const twentyFourHoursInMilliseconds = 24 * 60 * 60 * 1000;
        if (currentTime - timestamp >= twentyFourHoursInMilliseconds) {
          localStorage.removeItem('user-token');
        } else {
          this.isLoggedIn = parsedData.data;
        }
      }
      this.emitter.on("user-role", r => {
        this.isAdmin = r === 1;
        this.isDoctor = r !== 1 && r !== 5;
      });
      const admin = localStorage.getItem('user-role');
      if (admin !== null) {
        const parsedData = JSON.parse(admin);
        const timestamp = parsedData.timestamp;
        const currentTime = Date.now();
        const twentyFourHoursInMilliseconds = 24 * 60 * 60 * 1000;
        if (currentTime - timestamp >= twentyFourHoursInMilliseconds) {
          localStorage.removeItem('user-role');
        } else {
          this.isAdmin = parsedData.data === 1;
          this.isDoctor = parsedData.data !== 1 && parsedData.data !== 5;
        }
      }
    }
  },

  inject: ["mq"],

  async mounted() {
    await this.permissions();
  },
  async updated() {
    await this.permissions();
  }
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

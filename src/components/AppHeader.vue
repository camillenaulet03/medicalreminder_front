<template>
  <div class="header">
    <MqResponsive target="md+">
      <v-app-bar>
        <template #prepend>
          <HeaderLogo></HeaderLogo>
        </template>
        <v-spacer/>
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
import router from '../router/index.js';
import HeaderLogo from './header/HeaderLogo.vue';
import LoginButton from './header/LoginButton.vue';
import SigninButton from './header/SigninButton.vue';

export default {
  name: "AppHeader",

  components: {
    MqResponsive,
    HeaderLogo,
    LoginButton,
    SigninButton,
  },

  data: () => ({
    drawer: false,
    isLoggedIn: false,
  }),

  methods: {
    toHome() {
      router.push("/");
    },
  },

  inject: ["mq"],

  // mounted() {
  //   this.emitter.on("isLoggedIn", r => {
  //     this.isLoggedIn = r;
  //   });
  //   this.isLoggedIn = localStorage.getItem('user-token') != null;
  // },

};
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: inherit;
}

:deep(.burger-menu) {
  background-color: #fffbf7;
  padding-top: 10px;
}

.nav-menu {
  padding-left: 30px;
}

</style>
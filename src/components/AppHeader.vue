<template>
  <div>
    <MqResponsive target="md+">
      <v-app-bar color="#262DB7">
        <template #prepend>
          <HeaderLogo></HeaderLogo>
        </template>
        <v-spacer/>
        <PracticianButton></PracticianButton>
        <LoginButton v-if="!isLoggedIn"></LoginButton>
        <SigninButton v-if="!isLoggedIn"></SigninButton>
      </v-app-bar>
    </MqResponsive>
    <MqResponsive target="xs-sm">
      <v-app-bar>
        <template #prepend>
          <HeaderLogoBlue></HeaderLogoBlue>
        </template>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer
        class="burger-menu"
        v-model="drawer"
        location="top"
        v-bind:width="isLoggedIn ? 210 : 150"
      >

      <v-row>
        <v-col cols="12" class="text-center">
          <PracticianButton></PracticianButton>
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
import router from '../router/index.js';
import HeaderLogo from './header/HeaderLogo.vue';
import HeaderLogoBlue from './header/HeaderLogoBlue.vue';
import LoginButton from './header/LoginButton.vue';
import SigninButton from './header/SigninButton.vue';
import PracticianButton from './header/PracticianButton.vue';

export default {
  name: "AppHeader",

  components: {
    MqResponsive,
    HeaderLogo,
    HeaderLogoBlue,
    LoginButton,
    SigninButton,
    PracticianButton,
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
  background-color: #262DB7;
  padding-top: 10px;
}

v-app-bar {
  padding-left: 30px;
  background-color: #262DB7;
}

</style>
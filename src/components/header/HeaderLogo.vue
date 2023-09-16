<template>
  <div>
    <router-link :to="{ name: 'home', force: true }">
      <v-img
        aria-hidden=true
        eager
        content-class="logo-class"
        width="228"
        height="60"
        :src="require('@/assets/home/logo-mr-white.png')"
      ></v-img>
    </router-link>
  </div>
</template>

<script>
import router from '@/router/index.js';

export default {
  name: "HeaderLogo",

  methods: {
    toHome() {
      router.push("/");
    },
  },

}
</script>

<style scoped>
.v-image {
  position: relative;
}
</style>

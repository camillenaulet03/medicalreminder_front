<template>
  <div>
    <v-img
      aria-hidden=true
      eager
      content-class="logo-class"
      width="228"
      height="60"
      :src="require('../../assets/home/logo-mr.png')"
    ></v-img>
  </div>
</template>

<script>
import router from '../../router/index.js';

export default {
  name: "HeaderLogoBlue",

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
<template>
  <v-img
    aria-hidden=true
    :src="require('../../assets/home/logo-mr.png')"
  ></v-img>
</template>

<script>
import router from '../../router/index.js';

export default {
  name: "HeaderLogo",

  methods: {
    toHome() {
      router.push("/");
    },
  },

}
</script>
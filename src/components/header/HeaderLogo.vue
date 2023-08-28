<template>
  Ajouter logo
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
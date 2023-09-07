<template>
  <div class="notFound">
    <img :src="require('@/assets/notFound.png')" alt="introuvable"/>
    <p>Page introuvable</p>
  </div>
</template>

<script>

export default {
  name: 'NotFoundView',
}
</script>

<style scoped>
.notFound {
  background-color: white;
  width: 50%;
  text-align: center;
  margin-left: 25%;
  height: 350px;
  padding-top: 80px;
  margin-top: 5em;
}

@media screen and (max-width: 500px) {
  .notFound {
    width: 80%;
    margin-left: 10%;
  }
}
</style>

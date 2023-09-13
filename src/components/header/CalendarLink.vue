<template>
  <router-link :to="{ name: 'calendar', force: true }">
    <p class="header-link">Calendrier</p>
  </router-link>
</template>
<script>
export default {
  name: "CalendarLink",
};
</script>
<style scoped>
.header-link {
  margin-right: 30px;
}
</style>

<template>
  <AppointmentComponent v-if="isVisible" @close-popin="closePopin"></AppointmentComponent>
  <div>
    <v-btn @click="isVisible = !isVisible">AJOUT RDV</v-btn>
  </div>
</template>

<script>

import AppointmentComponent from '@/components/AppointmentComponent';
export default {
  name: 'CalendarView',
  components: {AppointmentComponent},
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    closePopin() {
      this.isVisible = false;
    },
  },
}
</script>

<style scoped>
button {
  background-color: #262DB7;
  color: white;
}
</style>

<template>
  <div class="overlay"></div>
  <div class="infoAppointment">
    <v-img
      src="@/assets/close.png"
      :width="30"
      style="float: right"
      @click="close"
    ></v-img>
    <br />
    <h2>Détail du rendez-vous</h2>
    <br />
    <slot />
    <br />
    <br />
    <v-btn @click="deleteAppointment">Supprimer le rendez-vous</v-btn>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "InfoAppointmentComponent",
  data() {
    return {
      practitien: null,
      practitiens: [],
      patients: [],
      startTime: null,
      endTime: null,
      comment: "",
      patient: null,
    };
  },
  methods: {
    async deleteAppointment(e) {
      e.preventDefault();
    },
    close() {
      this.$emit("close-popin");
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.infoAppointment {
  background-color: white;
  color: black;
  width: 80%;
  margin-left: 10%;
  z-index: 11;
  position: absolute;
  text-align: center;
  padding: 1em;
}

form {
  padding: 2em;
}

button {
  background-color: #cf6679;
  color: white;
}
</style>

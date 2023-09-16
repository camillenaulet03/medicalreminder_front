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
    {{ getDate() }}
    <br />
    {{ info.title }}
    <br />
    <br />
    <v-btn v-if="rightToDeleteAppointment" @click="deleteAppointment"
      >Supprimer le rendez-vous</v-btn
    >
    <br />
    <br />
  </div>
</template>

<script>
import AppointmentService from "@/services/appointmentService";
import { toast } from "vue3-toastify";

export default {
  name: "InfoAppointmentComponent",
  data() {
    return {};
  },
  props: {
    info: Array,
    rightToDeleteAppointment: Boolean,
  },
  methods: {
    async deleteAppointment() {
      const userId = await localStorage.getItem("user-id");
      await AppointmentService.delete({
        id_user: JSON.parse(userId).data,
        id_appointment: this.info.extendedProps.idAppointment,
      })
        .then(async () => {
          this.close();
        })
        .catch(() => {
          toast.error("Erreur lors de l'annulation du rendez-vous !");
        });
    },
    close() {
      this.$emit("close-popin");
    },
    getDate() {
      let dateEventStart = new Date(this.info.start);
      let dateEventEnd = new Date(this.info.end);
      let MinuteEventStart =
        dateEventStart.getMinutes() == 0 ? "00" : dateEventStart.getMinutes();
      let MinuteEventEnd =
        dateEventEnd.getMinutes() == 0 ? "00" : dateEventEnd.getMinutes();
      return (
        dateEventStart.toLocaleDateString("fr-FR", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        }) +
        " de " +
        dateEventStart.getHours() +
        "h" +
        MinuteEventStart +
        " à " +
        dateEventEnd.getHours() +
        "h" +
        MinuteEventEnd
      );
    },
    computed() {
      console.log("hello");
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

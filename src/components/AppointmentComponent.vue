<template>
  <div class="overlay"></div>
  <div class="addAppointment">
    <v-img src="@/assets/close.png" :width="30" style="float: right;" @click="close"></v-img>
    <form>
      <h2>Ajouter un rendez-vous</h2><br />
      <v-select label="Practitien" :items="practitiens" v-model="practitien" item-title="name" item-value="id"></v-select>
      <v-select label="Patient" :items="patients" v-model="patient" item-title="name" item-value="id"></v-select>
      <VueCtkDateTimePicker v-model="startTime" format="DD-MM-YYYY HH:mm" label="Choisir une date de début"></VueCtkDateTimePicker><br />
      <VueCtkDateTimePicker v-model="endTime" format="DD-MM-YYYY HH:mm" label="Choisir une date de fin"></VueCtkDateTimePicker><br />
      <v-textarea label="Informations supplémentaires" v-model="comment"></v-textarea>
      <v-btn @click="send">AJOUTER</v-btn>
    </form>
  </div>
</template>

<script>

import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import {toast} from "vue3-toastify";
import userService from "../../services/userService";
import AppointmentService from "../../services/appointmentService";

export default {
  name: "AppointmentComponent",
  components: {VueCtkDateTimePicker},
  data() {
    return {
      practitien: null,
      practitiens: [],
      patients: [],
      startTime: null,
      endTime: null,
      comment: '',
      patient: null
    }
  },
  methods: {
    async send(e) {
      e.preventDefault();
      if (this.practitien !== null && this.practitien !== '' && this.patient !== null && this.patient !== '' && this.startTime !== null && this.startTime !== '' && this.endTime !== null && this.endTime !== '') {
        await AppointmentService.add({
          id_practitioner: this.practitien,
          id_patient: this.patient,
          comment: this.comment,
          state: 'pending',
          start_time: this.startTime + ':00',
          end_time: this.endTime + ':00'
        }).then(() => {
          this.close();
          toast.success("Ajout du rendez-vous !")
        }).catch(() => {
          toast.error("Erreur lors de l'ajout du rendez-vous !")
        })
      } else {
        toast.error("Tous les champs sont obligatoires sauf informations supplémentaires !")
      }
    },
    close() {
      this.$emit("close-popin");
    }
  },
  async mounted() {
    userService.getPatients().then(async (result) => {
      this.patients = result.data.result.map(user => ({
        id: user.id,
        name: user.last_name + ' ' + user.first_name
      }));
    }).catch(() => {
      toast.error("Impossible de récupérer les patients !")
    });
    const userId = await localStorage.getItem("user-id");
    userService.getUser({ params: { id: JSON.parse(userId).data } }).then(async (result) => {
      this.practitiens = result.data.result.map(user => ({
        id: user.id,
        name: user.last_name + ' ' + user.first_name
      }));
    }).catch(() => {
      toast.error("Impossible de récupérer l'utilisateur courant !")
    })
  }
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

.addAppointment {
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
  background-color: #262DB7;
  color: white;
}
</style>

<template>
  <div style="display: flex; justify-content: center;">
    <form class="search-email">
      <h2>Chercher un patient par email pour partager son calendrier</h2>
      <input v-model="email" type="email" placeholder="Adresse email" />
      <input type="submit" @click="submit" value="CHERCHER"/>
    </form>
  </div>
</template>

<script>

import {toast} from 'vue3-toastify';
import userService from "@/services/userService";

export default {
  name: 'DashboardView',
  data() {
    return {
      email: null
    }
  },
  methods: {
    async submit(e) {
      e.preventDefault();
      if (this.email !== null && this.email !== '') {
        await userService.getUserByEmail({
          params: {
            email: this.email
          }
        }).then(async (result) => {
          const calendarParams = {
            id_practitioner: JSON.parse(localStorage.getItem("user-id"))["data"],
            id_patient: result.data[0]['id'],
          };
          console.log("calenderParams", calendarParams);
          await userService.shareCalendar(calendarParams).then(async (result2) => {
            console.log(result2);
          }).catch(() => {
            toast.error("Le partage de calendrier a échoué");
          });
        }).catch(() => {
          toast.error("Aucun utilisateur n'a été trouvé");
        });
      } else {
        toast.error("Les champ email est obligatoire !");
      }
    }
  }
}
</script>

<style scoped>
.search-email {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 1em 2em;
  width: 50%;
  border-radius: 20px;
  margin: 1em;
}

h2 {
  margin-bottom: 2em;
  text-align: center;
}

input {
  width: 60%;
  margin-bottom: 1em;
  padding: 0.75em;
  border-radius: 5px;
  border: 1px solid grey;
}

input[type="submit"] {
  width: 150px;
  margin-top: 2em;
  background-color: #262DB7;
  color: white;
}

@media (min-width: 600px) and (max-width: 1000px) {
  input {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .login {
    width: 80%;
  }

  input {
    width: 100%;
  }
}

</style>

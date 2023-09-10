<template>
<div style="display: flex; justify-content: center;">
  <form class="change-role">
    <h2>Changer le rôle d'un utilisateur</h2>
    <input v-model="email" type="email" placeholder="Adresse email de l'utilisateur" />
    <select v-model="role">
      <option v-for="roleToSelect in roleList" :value="roleToSelect.id" :key="roleToSelect.id">
        {{ roleToSelect.name }}
      </option>
    </select>
    <input type="submit" @click="submit" value="OK"/>
  </form>
</div>
</template>

<script>

import {toast} from 'vue3-toastify';
import authService from "../../services/authService";

export default {
  name: 'ChangeRoleView',
  data() {
    return {
      email: null,
      role: null,
      roleList: [
        {"id": 1, "name": "Admin"},
        {"id": 2, "name": "Médecin"},
        {"id": 3, "name": "Dentiste"},
        {"id": 4, "name": "Assistant"},
        {"id": 5, "name": "Patient"},
      ]
    }
  },
  methods: {
    async submit(e) {
      e.preventDefault();
      const userBody = {
        user: this.email,
        role: this.role,
      };
      if (this.email !== null && this.email !== "") {
        await authService.changeRole(userBody).then(async () => {
          console.log("Rôle changé");
        }).catch(() => {
          toast.error("L'email est incorrect !")
        });
      } else {
        toast.error("Veuillez choisir un utilisateur.");
      }
    }
  },
}
</script>

<style scoped>
.change-role {
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

select {
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

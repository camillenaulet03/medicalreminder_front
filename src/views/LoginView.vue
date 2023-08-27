<template>
  <div style="display: flex; justify-content: center;">
    <form class="login">
      <h2>Connexion</h2>
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Mot de passe" />
      <input type="submit" @click="submit" value="SE CONNECTER"/>
    </form>
  </div>
</template>

<script>

import {toast} from 'vue3-toastify';
import authService from "../../services/authService";

export default {
  name: 'LoginView',
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    async submit(e) {
      e.preventDefault();
      if (this.email !== null && this.email !== '' && this.password !== null && this.password !== '') {
        await authService.login({
          email: this.email,
          password: this.password
        }).then(async (result) => {
          await localStorage.setItem("user-token", JSON.stringify({data: result.data.token, timestamp: Date.now()}));
        }).catch(() => {
          toast.error("Les identifiants sont incorrects !")
        })
      } else {
        toast.error("Les champs email et mot de passe sont obligatoires !")
      }
    }
  }
}
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 1em 5em;
  width: 50%;
  border-radius: 20px;
  margin: 1em;
}

h2 {
  margin-bottom: 2em;
}

input {
  width: 350px;
  margin-bottom: 1em;
  padding: 0.75em;
  border-radius: 5px;
  border: 1px solid grey;
}

input[type="submit"] {
  width: 150px;
  margin-top: 2em;
  background-color: blue;
  color: white;
}

@media (min-width: 400px) and (max-width: 500px) {
  input {
    width: 250px;
  }
}

@media screen and (max-width: 400px) {
  .login {
    padding: 1em 3em;
  }

  input {
    width: 150px;
  }
}

</style>

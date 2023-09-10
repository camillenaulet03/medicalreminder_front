<template>
  <div style="display: flex; justify-content: center;">
    <form class="login">
      <h2>Connexion</h2>
      <input v-model="email" type="email" placeholder="Adresse email" />
      <input v-model="password" type="password" placeholder="Mot de passe" />
      <input type="submit" @click="submit" value="SE CONNECTER"/>
      <a href="/reset-password">Mot de passe oublié ?</a>
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
          await localStorage.setItem("user-id", JSON.stringify({data: result.data.id, timestamp: Date.now()}));
          await localStorage.setItem("user-status", JSON.stringify({data: 'pending', timestamp: Date.now()}));
          this.$router.push('/verify');
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

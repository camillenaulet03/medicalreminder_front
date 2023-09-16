<template>
  <div style="display: flex; justify-content: center;">
    <form class="reset">
      <h2>Mot de passe oublié</h2>
      <input v-model="email" type="email" placeholder="Adresse email" />
      <p>Un email va vous être envoyé pour réinitaliser le mot de passe de votre compte.</p>
      <input type="submit" @click="submit" value="REINITIALISER MON MOT DE PASSE"/>
    </form>
  </div>
</template>

<script>

import {toast} from 'vue3-toastify';
import authService from "@/services/authService";

export default {
  name: 'ResetPasswordView',
  data() {
    return {
      email: null
    }
  },
  methods: {
    async submit(e) {
      e.preventDefault();
      if (this.email !== null && this.email !== '') {
        await authService.resetPassword({
          email: this.email
        }).then(() => {
          toast.success("Un mail vient d'être envoyé !")
        }).catch(() => {
          toast.error("Les identifiants sont incorrects !")
        })
      } else {
        toast.error("Le champ email et mot de passe est obligatoire !")
      }
    }
  }
}
</script>

<style scoped>
.reset {
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

p {
  width: 60%;
}

input[type="submit"] {
  width: 350px;
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
  .reset {
    width: 80%;
  }

  input {
    width: 100%;
  }
}

</style>

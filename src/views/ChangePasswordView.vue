<template>
  <div style="display: flex; justify-content: center;">
    <form class="reset">
      <h2>Changer mon mot de passe</h2>
      <input v-model="password" type="password" placeholder="Mot de passe" />
      <input v-model="confirmPassword" type="password" placeholder="Confirmer le mot de passe" />
      <input type="submit" @click="submit" value="ENREGISTRER"/>
    </form>
  </div>
</template>

<script>

import {toast} from 'vue3-toastify';
import authService from "@/services/authService";

export default {
  name: 'ChangePasswordView',
  data() {
    return {
      password: null,
      confirmPassword: null,
      userId: null
    }
  },
  created() {
    this.userId = this.$route.query.userId;
  },
  methods: {
    async submit(e) {
      e.preventDefault();
      if (this.password !== this.confirmPassword) toast.error("Le mot de passe et la confirmation de mot de passe sont différents!")
      else {
        await authService.changePassword({
          id: this.userId,
          password: this.password
        }).then(async () => {
          await toast.success("Le mot de passe a été modifié avec succès!", {
            onClose: () => {
              this.$router.push('/login');
            }
          });
        }).catch((error) => {
          toast.error(error.response.data.message);
          console.error("Erreur lors du changement de mot de passe :", error);
        });
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

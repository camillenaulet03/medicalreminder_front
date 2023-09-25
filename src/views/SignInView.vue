<template>
    <div style="display: flex; justify-content: center;">
      <form class="login">
        <h2>Inscription</h2>
        <input v-model="phone" type="text" placeholder="Téléphone portable (sinon fixe)" />
        <p 
          style="    
            padding-bottom: 15px;
            font-size: 14px;
            margin-top: -9px;
          "
        >
          Un code va vous être envoyé sur ce numéro pour valider votre compte.
        </p>
        <input v-model="firstname" type="text" placeholder="Prénom" />
        <input v-model="lastname" type="text" placeholder="Nom" />
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="emailconfirm" type="email" placeholder="Confirmation de l'email" />
        <input v-model="password" type="password" placeholder="Mot de passe" />
        <label style="font-size: 14px; width: 100%;">
          <input v-model="cgu" type="checkbox" style="width: 3%" />
          J'accepte les Conditions Génrérales d'Utilisation de Medical Reminder.
        </label>
        <input type="submit" @click="submit" value="S'INSCRIRE"/>
      </form>
    </div>
  </template>
  
  <script>
  
  import {toast} from 'vue3-toastify';
  import authService from "@/services/authService";
  
  export default {
    name: 'SignInView',
    data() {
      return {
        phone: null,
        firstname: null,
        lastname: null,
        email: null,
        emailconfirm: null,
        password: null,
        cgu: null,
      }
    },
    methods: {
      async submit(e) {
        e.preventDefault();
        if (
          this.firstname !== null && this.firstname !== '' &&
          this.lastname !== null && this.lastname !== '' &&
          this.email !== null && this.email !== '' &&
          this.emailconfirm !== null && this.emailconfirm !== '' &&
          this.phone !== null && this.phone !== '' &&
          this.password !== null && this.password !== '' &&
          this.cgu
        ) {
          if(this.email !== this.emailconfirm) {
            toast.error("L'email n'est pas identique sur les deux champs!");
          } else {
            await authService.register({
              first_name: this.firstname,
              last_name: this.lastname,
              phone: this.phone,
              email: this.email,
              password: this.password,
              missed_appointments: 0,
              id_role: 5
            }).then(async() => {
              this.$router.push('/');
            }).catch((error) => {
            toast.error(error.response.data.message);
            });
          }
        } else {
          toast.error("Tous les champs sont obligatoires!");
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
    width: 60%;
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

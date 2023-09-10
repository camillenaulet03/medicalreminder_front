<template>
  <div style="display: flex; justify-content: center;">
    <form class="verify">
      <h2>Code de vérification</h2>
      <input v-model="code" type="text" placeholder="Code" />
      <input type="submit" @click="submit" value="VALIDER"/>
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
      code: null
    }
  },
  methods: {
    async submit(e) {
      e.preventDefault();
      if (this.code !== null && this.code !== '') {
        const userId = await localStorage.getItem("user-id");
        await authService.verify({
          id: JSON.parse(userId).data,
          code: this.code,
        }).then(async (result) => {
          await localStorage.setItem("user-token", JSON.stringify({data: result.data.token, timestamp: Date.now()}));
          await localStorage.setItem("user-status", JSON.stringify({data: 'approved', timestamp: Date.now()}));
          await localStorage.setItem("user-role", JSON.stringify({data: result.data.role, timestamp: Date.now()}));
          this.$router.push('/calendar')
        }).catch(() => {
          toast.error("Le code est incorrect !")
        })
      } else {
        toast.error("Le code est obligatoire !")
      }
    }
  }
}
</script>

<style scoped>
.verify {
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
  .verify {
    width: 80%;
  }

  input {
    width: 100%;
  }
}

</style>

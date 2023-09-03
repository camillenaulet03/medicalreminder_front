<template>
  <v-container>
    <section id="home">
      <div>
        <div style="flex: 1;">
          <h1 class="mainTitle">N'oubliez plus</h1>
          <h1 class="mainTitle titleSecondLine">vos rendez-vous médicaux</h1>
        </div>
        <div>
          <v-img
            aria-hidden=true
            :src="require('../assets/home/homeTop.png')"
          ></v-img>
        </div>
      </div>
    </section>
    <section>
      <div class="sectionHome">
        <div class="imageLeft">
          <v-img
            aria-hidden=true
            :src="require('../assets/home/section1.png')"
          ></v-img>
        </div>
        <div class="textRight">
          <h3 class="title">ADIEU LES OUBLIS</h3>
        </div>
      </div>
    </section>
    <section>
      <div class="sectionHome">
        <div id="sectionLeft">
          <div style="width: 100%;">
            <h3 class="title">ADIEU LES OUBLIS</h3>
            <p>
              Grâce à notre application, vous pouvez suivre vos différents rendez-vous chez vos practicients. 
              Nous vous envoyons des notifications pour vous prévenir de ceux-ci. 
              De même avec vos prises de médicaments régulière, on se charge de vous les rappeler!
            </p>
          </div>
          <v-img
            aria-hidden=true
            :src="require('../assets/home/section2-1.png')"
          ></v-img>
        </div>
        <div id="sectionMiddle">
          <v-img
            aria-hidden=true
            :src="require('../assets/home/section2-2.png')"
          ></v-img>
          <div style="width: 100%;">
            <h3 class="title">UNE SÉCURITÉ ACRRUE POUR VOS DONNÉES</h3>
            <p>
              Nous mettons en oeuvre tous les moyens nécessaire à la protection de vos données. 
              Vous pouvez utiliser notre application en sureté.
            </p>
          </div>
        </div>
        <div id="sectionRight">
          <div style="width: 100%;">
            <h3 class="title">AMÉLIOREZ LA CONFIANCE</h3>
            <p>
              Renforcer les liens entre patients et pratictiens est notre priorité. 
              Nous réduisons le taux d'absentéisme afin de permettre une meilleure fluidité de prise en charge des patients.
            </p>
          </div>
          <v-img
            aria-hidden=true
            :src="require('../assets/home/section2-3.png')"
          ></v-img>
        </div>
      </div>
    </section>
  </v-container>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>
<style scoped>
#home {
  display: flex;
  flex-direction: row;
  padding-left: 5em;
  padding-bottom: 5em;
}

.v-row {
  align-items: center;
}

.v-col-1 {
  flex: 0 0 30px;
  padding: 0;
}

.mainTitle {
  font-size: 64px;
}

.titleSecondLine {
  color: #262DB7;
}

.v-container {
  max-width: 100%;
  padding: 3em 0 0 0;
}

.title {
  font-size: 24px;
  padding-bottom: 1em;
  color: #262DB7;
}

.sectionHome {
  display: flex;
  flex-direction: row;
  background-color: white;
  align-items: center;
  padding: 3em;
}

#sectionLeft {
  padding: 0 3em 0 0;
  align-items: center;
  width: 80%;
}

#sectionMiddle {
  align-items: center;
  width: 80%;
}

#sectionRight {
  align-items: center;
  width: 80%;
  padding: 0 0 0 3em;
}

.section {
  margin: 2em 0 2em 20%;
  display: flex;
  width: 60%;
}

</style>
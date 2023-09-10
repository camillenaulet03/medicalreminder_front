<template>
  <v-container>
    <section id="home">
      <div>
        <div style="flex: 1;">
          <h1 class="mainTitle">N'oubliez plus</h1>
          <h1 class="mainTitle titleSecondLine">vos rendez-vous médicaux</h1>
        </div>
        <div class="titleImage">
          <v-row>
            <v-col>
              <v-img
                width="511"
                aria-hidden=true
                :src="require('../assets/home/homeMessage.png')"
              ></v-img>
            </v-col>
            <v-col>
              <v-img
                width="900"
                aria-hidden=true
                :src="require('../assets/home/homeTop.png')"
              ></v-img>
            </v-col>
          </v-row>
        </div>
      </div>
    </section>
    <section>
      <div class="sectionHome">
        <div class="imageLeft">
          <v-img
            aria-hidden=true
            width="809"
            height="688"
            :src="require('../assets/home/section1.png')"
          ></v-img>
        </div>
        <div class="textRight">
          <h3 class="title">Vous êtes praticien ?</h3>
          <v-row>
            <v-col><v-icon icon="mdi-timer-outline" /></v-col>
            <v-col cols="11">Libérez du temps médical grâce à la prise de rendez-vous en ligne et un logiciel moderne.</v-col>
          </v-row>
          <v-row>
            <v-col><v-icon icon="mdi-sofa-single-outline" /></v-col>
            <v-col cols="11">Gagnez en confort de travail au quotidien en réduisant les appels téléphoniques à votre cabinet.</v-col>
          </v-row>
          <v-row>
            <v-col><v-icon icon="mdi-hand-heart-outline" /></v-col>
            <v-col cols="11">Améliorez l'accès aux soins pour vos patients en leur proposant la meilleure des expériences.</v-col>
          </v-row>
          <v-row>
            <v-col><v-icon icon="mdi-alarm-check" /></v-col>
            <v-col cols="11">Proposez à vos patient un suivi régulier de leurs prise médicamenteuse.</v-col>
          </v-row>
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
    <section>
      <div class="sectionHome">
        <div class="imageLeft">
          <v-img
            aria-hidden=true
            width="650"
            :src="require('../assets/home/section3.png')"
          ></v-img>
        </div>
        <div class="textRight textRightBottom">
          <h3 class="title">Aucune prise de tête!</h3>
          <p>
            On vous aide à ne plus oublier vos prise de médicaments. 
            Définissez les rappels et on se charge du reste ! 
            Adopter cet outil pour une meilleure santé et un suivi régulier de celle-ci.
          </p>
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
  background-image: url("../assets/home/homeBackground.png");
}

.text-with-icon {
  margin-bottom: 15px;
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

.titleImage {
  margin-top: 50px;
  /* position: absolute; */
  left: 0;
  right: 0;
}

.titleSecondLine {
  color: #262DB7;
}

.textRightBottom {
  width: 30%;
  margin-left: 100px;
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
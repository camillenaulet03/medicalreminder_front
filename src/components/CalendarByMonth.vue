<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="item in weekdays" :key="item">
          {{ item }}
        </v-col>
      </v-row>
      <v-row> </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CalendarByMonth",
  data() {
    return {
      today: null,
      weekdays: [
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche",
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

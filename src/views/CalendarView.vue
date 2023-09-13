<template>
  <AppointmentComponent
    v-if="isVisible"
    @close-popin="closePopin"
  ></AppointmentComponent>
  <div id="calendar">
    <v-container>
      <FullCalendar :options="calendarOptions" />
    </v-container>
  </div>
</template>

<script>
import AppointmentComponent from "@/components/AppointmentComponent";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import frLocale from "@fullcalendar/core/locales/fr";

export default {
  name: "CalendarView",
  components: { AppointmentComponent, FullCalendar },
  data() {
    return {
      isVisible: false,
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        locale: frLocale,
        initialView: "dayGridMonth",
        customButtons: {
          addApointment: {
            text: "AJOUT RDV",
            click: this.openPopin,
          },
        },
        headerToolbar: {
          left: "today prev,next",
          center: "title",
          right: "addApointment dayGridMonth,dayGridWeek",
        },
        dateClick: this.handleDateClick,
        events: [
          { title: "event 1", date: "2023-09-12" },
          { title: "event 2", date: "2023-09-13" },
        ],
      },
    };
  },
  methods: {
    closePopin() {
      this.isVisible = false;
    },
    openPopin() {
      this.isVisible = true;
    },
    handleDateClick: function (arg) {
      alert("date click! " + arg.dateStr);
    },
  },
};
</script>

<style scoped>
#calendar {
  margin-top: 60px;
  margin-bottom: 60px;
}
button {
  background-color: #262db7;
  color: white;
}
</style>

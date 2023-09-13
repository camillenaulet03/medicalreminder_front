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
import AppointmentService from "../../services/appointmentService";

import { toast } from "vue3-toastify";

import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import frLocale from "@fullcalendar/core/locales/fr";

export default {
  name: "CalendarView",
  components: { AppointmentComponent, FullCalendar },
  data() {
    return {
      idUserToGetCalendar: null,
      appointments: [],
      isVisible: false,
      calendarOptions: {
        timeZone: "UTC",
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
        eventClick: this.handleEventClick,
        events: [
          {
            end: "2023-09-13T07:00:00.000Z",
            start: "2023-09-13T05:00:00.000Z",
            title: 8,
          },
          {
            end: "2023-09-13T07:00:00.000Z",
            start: "2023-09-13T05:00:00.000Z",
            title: 8,
          },
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
    handleEventClick: function (info) {
      alert("info event : " + info.event.title + ", view : " + info.view.type);
    },
    getAppointments: async function () {
      await AppointmentService.getAll({ id_user: 6 })
        .then(async (result) => {
          this.appointments = result.data.selectResult.map((appointment) => ({
            title: appointment.id_practitioner,
            start: appointment.start_time,
            end: appointment.end_time,
          }));
          console.log(this.appointments);
          console.log([
            {
              end: "2023-09-13T07:00:00.000Z",
              start: "2023-09-13T05:00:00.000Z",
              title: 8,
            },
            {
              end: "2023-09-13T07:00:00.000Z",
              start: "2023-09-13T05:00:00.000Z",
              title: 8,
            },
          ]);
        })
        .catch(() => {
          toast.error("Erreur lors du chargements des rendez-vous !");
        });
    },
  },
  async mounted() {
    this.getAppointments();
    let currentIdUser = await localStorage.getItem("user-id");
    this.idUserToGetCalendar = JSON.parse(currentIdUser).data;
  },
};
</script>

<style>
#calendar {
  margin-top: 60px;
  margin-bottom: 60px;
}
#calendar .fc .fc-button-primary {
  background-color: #262db7;
  border-color: #262db7;
  color: white;
}

#calendar .fc .fc-next-button,
#calendar .fc .fc-prev-button,
#calendar .fc .fc-dayGridWeek-button,
#calendar .fc .fc-dayGridMonth-button,
#calendar .fc .fc-today-button {
  background-color: white;
  border-color: black;
  color: black;
}

#calendar .fc .fc-icon-chevron-right,
#calendar .fc .fc-icon-chevron-left {
  vertical-align: bottom;
}
</style>

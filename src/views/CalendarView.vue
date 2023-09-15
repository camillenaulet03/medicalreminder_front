<template>
  <AppointmentComponent
    v-if="isVisible"
    @close-popin="closePopin"
  ></AppointmentComponent>
  <InfoAppointmentComponent
    :info="info"
    v-if="isVisibleInfo"
    @close-popin="closePopin"
  >
  </InfoAppointmentComponent>
  <div id="calendar">
    <v-container>
      <FullCalendar :options="calendarOptions" />
    </v-container>
  </div>
</template>

<script>
import InfoAppointmentComponent from "@/components/InfoAppointmentComponent";
import AppointmentComponent from "@/components/AppointmentComponent";
import AppointmentService from "../../services/appointmentService";

import { toast } from "vue3-toastify";

import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import frLocale from "@fullcalendar/core/locales/fr";

export default {
  name: "CalendarView",
  components: {
    AppointmentComponent,
    FullCalendar,
    InfoAppointmentComponent,
  },
  data() {
    return {
      idUserToGetCalendar: null,
      appointments: [],
      info: [],
      isVisible: false,
      isVisibleInfo: false,
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
        eventClick: this.handleEventClick,
        events: [],
      },
    };
  },
  methods: {
    closePopin() {
      this.isVisible = false;
      this.isVisibleInfo = false;
      this.getAppointments();
    },
    openPopin() {
      this.isVisible = true;
    },
    handleEventClick: function (info) {
      this.info = info.event;
      this.isVisibleInfo = true;
    },
    getAppointments: async function () {
      const userId = await localStorage.getItem("user-id");
      await AppointmentService.getAll({ id_user: JSON.parse(userId).data })
        .then(async (result) => {
          this.calendarOptions.events = await result.data.selectResult.map(
            (appointment) => ({
              title: appointment.first_name + " " + appointment.last_name,
              start: appointment.start_time,
              end: appointment.end_time,
              extendedProps: { idAppointment: appointment.id },
            })
          );
        })
        .catch(() => {
          toast.error("Erreur lors du chargements des rendez-vous !");
        });
    },
  },
  async mounted() {
    this.getAppointments();
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

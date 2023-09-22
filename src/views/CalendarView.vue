<template>
  <AppointmentComponent
    v-if="isVisible"
    @close-popin="closePopin"
  ></AppointmentComponent>
  <InfoAppointmentComponent
    :rightToDeleteAppointment="rightToDeleteAppointment"
    :info="info"
    v-if="isVisibleInfo"
    @close-popin="closePopin"
  >
  </InfoAppointmentComponent>
  <div id="calendar">
    <v-container class="calendar-container">
      <div id="choice">
        <select v-model="calendaruser" @change="chooseUser($event)">
          <option :value="this.connectedUserId" :key="this.connectedUserId">
            {{ this.currentUserName }}
          </option>
          <option v-for="c in calendarsToShow" :value="c.id" :key="c.id">
            {{ c.first_name + " " + c.last_name }}
          </option>
        </select>
      </div>
      <FullCalendar :options="calendarOptions" />
    </v-container>
  </div>
</template>

<script>
import InfoAppointmentComponent from "@/components/InfoAppointmentComponent";
import AppointmentComponent from "@/components/AppointmentComponent";
import AppointmentService from "@/services/appointmentService";
import UserService from "@/services/userService";

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
      rightToDeleteAppointment: false,
      isVisible: false,
      isVisibleInfo: false,
      calendaruser: null,
      calendarsToShow: [],
      currentUserName: '',
      selectedUserId: 0,
      connectedUserId: 0,
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        locale: frLocale,
        initialView: "dayGridMonth",
        headerToolbar: {
          left: "today prev,next",
          center: "title",
          right: "dayGridMonth,dayGridWeek",
        },
        eventDisplay: "block",
        eventClick: this.handleEventClick,
        events: [],
      },
    };
  },
  methods: {
    closePopin() {
      this.isVisible = false;
      this.isVisibleInfo = false;
      this.getAppointments(this.selectedUserId);
    },
    openPopin() {
      this.isVisible = true;
    },
    handleEventClick: function (info) {
      this.info = info.event;
      this.isVisibleInfo = true;
    },
    getAppointments: async function (userId) {
      this.calendarOptions.events = [];
      await AppointmentService.getAll({ id_user: userId })
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
    chooseUser(event) {
      this.selectedUserId = event.target.value;
      this.getAppointments(this.selectedUserId);
    }
  },
  async mounted() {
    this.connectedUserId = JSON.parse(localStorage.getItem("user-id")).data;
    this.selectedUserId = this.connectedUserId;
    UserService.getUser({params: {id: this.selectedUserId}}).then(async (result) => {
      this.currentUserName = result.data.result[0].first_name + ' ' + result.data.result[0].last_name;
    }).catch(() => {
      toast.error("Impossible de récupérer l'utilisateur courant !")
    })

    this.getAppointments(this.selectedUserId);

    await UserService.getSharedUsers({params: {
      id: this.selectedUserId
    }}).then(async (result) => {
      this.calendarsToShow = result.data;
      console.log(this.calendarsToShow[0]);
    }).catch(() => {
      toast.error("Erreur lors du chargement des calendriers partagés !");
    });

    const role = await JSON.parse(localStorage.getItem("user-role"))["data"];
    if (role !== 5) {
      // user is not a patient
      this.calendarOptions["customButtons"] = {
        addApointment: {
          text: "AJOUT RDV",
          click: this.openPopin,
        },
      };
      this.calendarOptions["headerToolbar"] = {
        left: "today prev,next",
        center: "title",
        right: "addApointment dayGridMonth,dayGridWeek",
      };
      this.rightToDeleteAppointment = true;
    }
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

#calendar .fc .fc-event {
  cursor: pointer;
}

#calendar .calendar-container {
  background-color: white;
  padding: 60px;
  border-radius: 10px;
  margin-bottom: 120px;
}

select {
  width: 60%;
  margin-bottom: 1em;
  padding: 0.75em;
  border-radius: 5px;
  border: 1px solid black !important;
}

</style>

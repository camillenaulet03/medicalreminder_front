import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Vue3Mq } from "vue3-mq";
// import mitt from 'mitt';
// import vuetify from './plugins/vuetify';
import 'vue3-toastify/dist/index.css';

// const emitter = mitt();
const app = createApp(App)
//   .use(vuetify)
  .use(router)
  .use(Vue3Mq, {
    preset: 'vuetify'
  });
// app.config.globalProperties.emitter = emitter;
app.mount('#app');
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
];

// function beforeEnter(to, from, next) {
//   if (localStorage.getItem('user-token')) next();
//   else next({ name: 'login', force: true, state: { login: true } })
// }

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
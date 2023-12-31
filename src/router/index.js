import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import SignInView from "@/views/SignInView.vue";
import ResetPasswordView from "@/views/ResetPasswordView.vue";
import ChangePasswordView from "@/views/ChangePasswordView.vue";
import ChangeRoleView from "@/views/ChangeRoleView.vue";
import CalendarView from "@/views/CalendarView.vue";
import DashboardView from "@/views/DashboardView.vue";
import VerifyView from "@/views/VerifyView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

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
  {
    path: '/signin',
    name: 'signin',
    component: SignInView
  },
  {
    path: '/reset-password',
    name: 'resetPassword',
    component: ResetPasswordView
  },
  {
    path: '/change-password',
    name: 'changePassword',
    component: ChangePasswordView
  },
  {
    path: '/change-role',
    name: 'changeRole',
    component: ChangeRoleView,
    beforeEnter: (to, from, next) => beforeEnter(to, from, next)
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    beforeEnter: (to, from, next) => beforeEnter(to, from, next)
  },
  {
    path: '/verify',
    name: 'verify',
    component: VerifyView,
    beforeEnter: (to, from, next) => beforeVerify(to, from, next)
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarView,
    beforeEnter: (to, from, next) => beforeEnter(to, from, next)
  },
  { path: '/404', component: NotFoundView },
  { path: '/:catchAll(.*)', redirect: '/404' }
];

function beforeEnter(to, from, next) {
  if (localStorage.getItem('user-token')) next();
  else next({ name: 'login', force: true, state: { login: true } })
}

function beforeVerify(to, from, next) {
  if (localStorage.getItem('user-status') !== null && JSON.parse(localStorage.getItem('user-status')).data === 'pending') next();
  else next({ name: 'login', force: true, state: { login: true } })
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;

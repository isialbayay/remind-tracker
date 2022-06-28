import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import PerformanceView from "@/views/PerformanceView.vue";
import LandingView from "@/views/LandingView.vue";

const routes = [
  {
    path: '/sessions',
    name: 'sessions',
    component: HomeView
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/performance",
    name: "performance",
    component: PerformanceView,
  },
  {
    path: "/",
    name: "landing",
    component: LandingView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

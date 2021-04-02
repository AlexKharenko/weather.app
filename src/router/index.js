import { createRouter, createWebHistory } from "vue-router";
import Weather from "../views/Weather.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Weather,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/city/:id",
    name: "City",
    component: () => import("../views/City.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

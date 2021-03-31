import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/weather",
    name: "Weather",
    component: () =>
      import(/* webpackChunkName: "weather-container"*/ "../views/Weather.vue"),
  },
  {
    path: "/weather/:id",
    name: "City",
    component: () =>
      import(/*webpackChunkName: "weather-container"*/ "../views/City.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import AppHome from "@/components/AppHome";
import AppAbout from "@/components/AppAbout";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: AppHome,
  },
  {
    path: "/about",
    name: "About",
    component: AppAbout,
  },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});

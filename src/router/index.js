import AppHome from "@/components/AppHome";
import AppAbout from "@/components/AppAbout";
import AppModules from "@/components/AppModules";
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
  {
    path: "/modules",
    name: "Modules",
    component: AppModules,
  },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});

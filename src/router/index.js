import AppHome from "@/components/AppHome";
import AppAbout from "@/components/AppAbout";
import AppModules from "@/components/AppModules";
import TheCactus from "@/components/Cactus/TheCactus";
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
  {
    path: "/cacti",
    name: "Cacti",
    component: TheCactus,
  },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});

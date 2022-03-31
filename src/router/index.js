import AppHome from "@/components/AppHome";
import AppAbout from "@/components/AppAbout";
import AppModules from "@/components/AppModules";
import TheCactus from "@/components/Cactus/TheCactus";
import ParentSlots from "@/components/Slots/ParentSlots";

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
  {
    path: "/slots/sadasdasdas/qweee-assaas/qweqwe121313",
    name: "Slots",
    component: ParentSlots,
  },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});

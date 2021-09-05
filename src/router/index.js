import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/AppHome.vue") },
  { path: "/about", component: () => import("@/views/AppAbout.vue") },
  { path: "/characters", component: () => import("@/views/AppCharacters.vue") },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

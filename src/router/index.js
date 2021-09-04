import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/Home.vue") },
  { path: "/about", component: () => import("@/views/About.vue") },
  { path: "/search", component: () => import("@/views/Search.vue") },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

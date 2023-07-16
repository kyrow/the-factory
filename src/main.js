import { createApp } from "vue";
import "./style.css";
import "normalize.css";
import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "Home", path: "/", component: () => import("@/pages/Home.vue") },

    {
      name: "Photo",
      path: "/photopage/:id",
      component: () => import("@/pages/PhotoPage.vue"),
    },
    {
      name: "Favorites",
      path: "/favorite",
      component: () => import("@/pages/Favorite.vue"),
    },
  ],
});

const app = createApp(App).use(router).mount("#app");

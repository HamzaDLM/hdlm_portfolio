import { createWebHistory, createRouter } from "vue-router";

export const router = createRouter({
  history: createWebHistory('/hdlm_portfolio/'),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/pages/homePage"),
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      component: () => import("@/views/pages/portfolioPage"),
    },
    {
      path: "/techstack",
      name: "Tech Stack",
      component: () => import("@/views/pages/techstackPage"),
    },
    {
      path: "/coderepos",
      name: "Code Repos",
      component: () => import("@/views/pages/codereposPage"),
    },
  ],
});
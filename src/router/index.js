import { createWebHistory, createRouter } from "vue-router";

export const router = createRouter({
  history: createWebHistory(), //"/hdlm_portfolio/"
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/pages/homePage"),
    },
    {
      path: "/hdlm_portfolio/",
      name: "Home",
      component: () => import("@/views/pages/homePage"),
    },
    {
      path: "/hdlm_portfolio/portfolio",
      name: "Portfolio",
      component: () => import("@/views/pages/portfolioPage"),
    },
    {
      path: "/hdlm_portfolio//techstack",
      name: "Tech Stack",
      component: () => import("@/views/pages/techstackPage"),
    },
    {
      path: "/hdlm_portfolio/coderepos",
      name: "Code Repos",
      component: () => import("@/views/pages/codereposPage"),
    },
  ],
});
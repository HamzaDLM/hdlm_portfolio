import { createWebHistory, createRouter } from "vue-router";

export const router = createRouter({
  history: createWebHistory(), //"/hdlm_portfolio/"
  routes: [
    {
      path: "/",
      name: "00.about me",
      component: () => import("@/views/pages/homePage"),
    },
    {
      path: "/hdlm_portfolio/",
      name: "00.about me",
      component: () => import("@/views/pages/homePage"),
    },
    {
      path: "/hdlm_portfolio/portfolio",
      name: "01.portfolio",
      component: () => import("@/views/pages/portfolioPage"),
    },
    {
      path: "/hdlm_portfolio//techstack",
      name: "02.tech stack",
      component: () => import("@/views/pages/techstackPage"),
    },
    {
      path: "/hdlm_portfolio/coderepos",
      name: "03.code repos",
      component: () => import("@/views/pages/codereposPage"),
    },
  ],
});
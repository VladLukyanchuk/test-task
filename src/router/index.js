import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage";
import TestPage from "@/views/TestPage";
import ResultPage from "@/views/ResultPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainPage,
  },
  {
    path: "/test",
    name: "test",
    component: TestPage,
  },
  {
    path: "/result",
    name: "result",
    component: ResultPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

/* eslint-disable no-unused-vars */
import Home from "./pages/Home.vue";
import Candidates from "./pages/Candidates.vue"
import Add from "./pages/Add.vue"

export const routes = [
  { name: "home", titulo: "Home", path: "/", component: Home},
  { name: "candidates", titulo: "Candidatos", path: "/candidates", component: Candidates, menu: true },
  { name: "data", titulo: "Dados", path: "/data", component: Home,  menu: true},
  { name: "eleiction", titulo: "Eleição", path: "/eleiction", component: Home,  menu: true},
  { name: "plus", titulo: "+", path: "/add", component: Add,  menu: true},
  { name: "geral", path: "*", component: Home,},
];

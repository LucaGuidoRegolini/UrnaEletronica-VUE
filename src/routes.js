/* eslint-disable no-unused-vars */
import Home from "./pages/Home.vue";
import Candidates from "./pages/Candidates.vue"
import Dates from "./pages/Dates.vue"
import Eleition from "./pages/Eleition.vue";
import Add from "./pages/Add.vue"

export const routes = [
  { name: "home", titulo: "Home", path: "/", component: Candidates},
  { name: "candidates", titulo: "Candidatos", path: "/candidates", component: Candidates, menu: true },
  { name: "data", titulo: "Dados", path: "/data", component: Dates,  menu: true},
  { name: "eleiction", titulo: "Eleição", path: "/eleiction", component: Eleition,  menu: true},
  { name: "plus", titulo: "+", path: "/add", component: Add,  menu: true},
  { name: "geral", path: "*", component: Home,},
];

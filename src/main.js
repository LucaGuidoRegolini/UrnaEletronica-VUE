/* eslint-disable no-unused-vars */
import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import { routes } from "./routes";

Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.config.silent = true;
//Vue.prototype.$baseUrl = "http://localhost:8080/";
Vue.prototype.$baseUrl =
  "https://simuladoreleicao.netlify.app/";

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

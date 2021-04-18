/* eslint-disable no-unused-vars */
<template>
  <div id="app">
    <Header :rotas="routes" />
    <router-view></router-view>
  </div>
</template>

<script>
import { routes } from "./routes";
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      routes: routes.filter((route) => route.menu),
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
* {
  margin: 0px;
  font-family: "Roboto", sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

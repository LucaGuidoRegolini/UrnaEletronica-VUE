<template>
  <div class="Header">
    <div class="espaco"></div>
    <router-link
      v-for="rota in rotas"
      :key="rota"
      :to="{ name: rota.name }"
    >
      <Button :rotulo="rota.titulo" estilo="transparente" />
    </router-link>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  components: {
    Button,
  },
  props: {
    rotas: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style>
.Header {
  background: linear-gradient(
      340.63deg,
      #000000 -32.27%,
      rgba(255, 255, 255, 0) 52.81%
    ),
    #00bfff;
  width: 100%;
  height: 60px;
  display: flex;
}
.espaco {
  flex-grow: 1;
}
</style>

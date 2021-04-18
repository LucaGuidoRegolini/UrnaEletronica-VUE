<template>
  <div class="components">
    <div v-show="visivel" class="side-bar">
      <h1 class="titulo">{{ titulo }}</h1>
      <Button titulo="Candidatos" estilo="transparente" />
      <Button titulo="Dados" estilo="transparente" />
      <Button titulo="Eleição" estilo="transparente" />
    </div>
    <button class="onOff" @click="troca()"></button>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  props: {
    titulo: String,
  },
  data() {
    return {
      visivel: true,
    };
  },
  components: {
    Button,
  },
  methods: {
    troca() {
      this.visivel = !this.visivel;
    },
  },
};
</script>

<style scoped>
.components {
  display: flex;
}
.side-bar {
  background: linear-gradient(
      340.63deg,
      #000000 -32.27%,
      rgba(255, 255, 255, 0) 52.81%
    ),
    #00bfff;
  width: 280px;
  height: 100vh;
}
.titulo {
  color: aliceblue;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 80px;
  font-size: 35px;
}
.onOff {
  width: 40px;
  height: 40px;
  text-decoration: none;
  border-radius: 50px;
  padding: 6px 4px;
  border: none;
  margin-left: 5px;
  margin-top: 93vh;
  background-image: url("../assets/ArrowBack-white/img.png");
  background-repeat: no-repeat;
  background-position: center;
  background-color: #cecb39;
}
</style>

<template>
  <div class="contend">
    <h1 class="titulo">
      Parece que você ainda não criou nenhum candidadto 😞
    </h1>
    <p class="conteudo">
      Quer criar um agora?<br />
      É facil, basta clicar nesse botão
    </p>
    <router-link :to="{ name: 'plus' }">
      <Button rotulo="+" tipo="button" />
    </router-link>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  components: {
    Button,
  },
};
</script>

<style scoped>
* {
  margin: auto;
}

.contend {
  width: 300px;
  height: 400px;
  background-color: rgba(41, 41, 41, 0.603);
  border: solid 2px rgb(0, 0, 0);
  border-radius: 20px;
  display: inline-block;
  margin: 10px;
}
.titulo,
.conteudo {
  color: white;
}

.conteudo{
    font-size: 21px;
    margin-bottom: 0px;
}
</style>

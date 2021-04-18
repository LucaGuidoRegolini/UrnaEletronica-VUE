<template>
  <div class="candidates">
    <div class="contend">
      <Painel
        photo="http://192.168.15.141:8080/img/logo.82b9c7a5.png"
        name="Nome"
        numero="12"
        partido="PSL"
      />
    </div>
  </div>
</template>

<script>
import Painel from "../components/Painel";
export default {
  components: {
    Painel,
  },
};
</script>

<style scoped>
.contend {
  margin-top: 30px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  text-align: center;
}
</style>

<template>
  <button
    @click="disparaAcao()"
    class="botao"
    :class="estiloDoBotao"
    :type="tipo"
  >
    {{ rotulo }}
  </button>
</template>
<script>
export default {
  props: {
    tipo: String,
    rotulo: {
      required: true,
      type: String,
    },
    confirmacao: Boolean,
    menssage: String,
    estilo: String,
  },

  methods: {
    disparaAcao() {
      if (this.confirmacao) {
        if (confirm(this.menssage)) {
          this.$emit(
            "botaoAtivado" /*,"valores para o pai"*/
          );
        }
        return;
      }
      this.$emit("botaoAtivado");
    },
  },

  computed: {
    estiloDoBotao() {
      if (this.estilo == "padrao") return "botao-padrao";
      else if (this.estilo == "transparente")
        return "botao-trans";
      else if (this.estilo == "envia") return "botao-envia";
      else if (this.estilo == "excluir")
        return "botao-excluir";
      else if (this.estilo == "tecla") return "botao-tecla";
      else if (this.estilo == "confirma")
        return "botao-confirma";
      else if (this.estilo == "corrige")
        return "botao-corrige";
      else if (this.estilo == "branco")
        return "botao-branco";
      else return "botao-padrao";
    },
  },
};
</script>

<style scoped>
.botao {
  display: inline-block;
}
.botao-trans {
  background-color: #ffffff00;
  font-size: 18px;
  padding: 20px;
  box-shadow: none;
  border-style: none;
  color: aliceblue;
  text-align: center;
  height: 100%;
  min-width: 80px;
}
.botao-trans:hover {
  background-color: rgba(0, 0, 0, 0.082);
  border-style: none;
}

.botao-trans:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
}

.botao-envia {
  width: 100px;
  height: 60px;
  font-size: 18px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: none;
  border-style: none;
  color: aliceblue;
  text-align: center;
  background-color: green;
}
.botao-excluir {
  width: 100px;
  height: 60px;
  font-size: 18px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: none;
  border-style: none;
  color: aliceblue;
  text-align: center;
  background-color: red;
}
.botao-tecla {
  margin: 10px;
  background-color: black;
  color: snow;
  border-radius: 5px;
  height: 40px;
  width: 70px;
}
.botao-confirma {
  width: 85px;
  height: 60px;
  font-size: 15px;
  padding: 10px;
  border-radius: 20px;
  box-shadow: none;
  border-style: none;
  color: aliceblue;
  text-align: center;
  background-color: green;
}
.botao-corrige {
  width: 85px;
  height: 60px;
  font-size: 15px;
  padding: 10px;
  border-radius: 20px;
  box-shadow: none;
  border-style: none;
  color: aliceblue;
  text-align: center;
  background-color: rgb(173, 173, 2);
}
.botao-branco {
  width: 85px;
  height: 60px;
  font-size: 15px;
  padding: 10px;
  border-radius: 20px;
  box-shadow: none;
  border-style: none;
  color: black;
  text-align: center;
  background-color: white;
  border: solid 1px rgb(0, 0, 0);
}
</style>

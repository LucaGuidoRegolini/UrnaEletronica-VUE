<template>
  <div class="add">
    <form @submit.prevent="grava()" class="form">
      <h1 class="titulo">Cadastro do candidato</h1>
      <img
        class="imagem"
        :src="imagem"
        alt=""
        @error="erroImg"
      />
      <div class="info url">
        <label for="foto">Url</label>
        <input
          id="foto"
          @blur="buscaImagem"
          v-model.lazy="inputImg"
        />
      </div>
      <div class="info name">
        <label for="name">Nome</label>
        <input
          id="name"
          autocomplete="off"
          v-model="candidate.name"
        />
      </div>
      <div class="info numero">
        <label for="numero">Numero</label>
        <input id="numero" v-model="candidate.numero" />
      </div>
      <div class="info partido">
        <label for="partido">Partido</label>
        <input id="partido" v-model="candidate.partido" />
      </div>
      <Button
        tipo="submit"
        rotulo="Enviar"
        estilo="envia"
      />
    </form>
  </div>
</template>

<script>
import CandidateStorege from "../classes/CandidateStorege";
import Candidate from "../classes/Candidate";
import Button from "../components/Button";
export default {
  components: {
    Button,
  },
  data() {
    return {
      imagem: this.$baseUrl + "img/padrao.cb23a20f.jpg",
      inputImg: "",
      candidate: new Candidate(),
    };
  },
  methods: {
    buscaImagem() {
      if (this.inputImg.length) {
        this.imagem = this.inputImg;
      } else {
        this.imagem =
          this.$baseUrl + "img/padrao.cb23a20f.jpg";
      }
    },
    erroImg() {
      alert("Url da imagem invalida");
      this.imagem =
        this.$baseUrl + "img/padrao.cb23a20f.jpg";
    },
    grava() {
      if (this.candidate.numero && this.candidate.name) {
        try {
          this.candidates = new CandidateStorege(
            "candidates"
          );
          this.candidate.url = this.imagem;
          this.candidates.set(
            "candidates",
            this.candidate.numero,
            this.candidate
          );
          this.candidates.getAll("candidates");
          this.candidate = new Candidate();
          this.inputImg = "";
          this.imagem =
            this.$baseUrl + "img/padrao.cb23a20f.jpg";
          alert("Candidato registrado");
        } catch {
          alert("Numero repetido");
        }
      } else alert("Nome ou numero do candidato em branco");
    },
  },
};
</script>

<style scoped>
.add {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.form {
  max-width: 400px;
  border: solid 2px rgb(0, 0, 0);
  border-radius: 30px;
  padding: 10px 15px;
  text-align: center;
}
.titulo ~ .info {
  margin-top: 20px;
}
.imagem {
  margin-top: 25px;
  width: 200px;
  height: 200px;
  border: solid 2px rgb(0, 0, 0);
  border-radius: 70px;
}
.info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 900;
}
.info input {
  border-radius: 8px;
  width: 230px;
  font-size: 18px;
  font-weight: 900;
  text-align: center;
}
button + button {
  margin-left: 20px;
}
</style>

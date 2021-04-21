<template>
  <div class="eleition">
    <div class="box">
      <div class="form">
        <img class="imagem" :src="imagem" alt="" />
        <div class="info name">
          <label for="name">Nome</label>
          <p id="name" autocomplete="off">
            {{ candidate.name }}
          </p>
        </div>
        <div class="info numero">
          <label for="numero">Numero</label>
          <p id="numero">{{ number }}</p>
        </div>
        <div class="info partido">
          <label for="partido">Partido</label>
          <p id="partido">{{ candidate.partido }}</p>
        </div>
      </div>
      <div class="teclado">
        <div class="setor">
          <b>JUSTIÇA<br />ELEITORAL</b>
        </div>
        <div class="setor teclas">
          <Button
            @botaoAtivado="addNum(n)"
            :rotulo="n"
            estilo="tecla"
            v-for="n in 9"
            :value="n"
            :key="n"
          />
          <Button
            @botaoAtivado="addNum(0)"
            rotulo="0"
            estilo="tecla"
            value="0"
          />
        </div>
        <div class="setor button">
          <Button
            rotulo="Confirmar"
            estilo="confirma"
            @botaoAtivado="confirmar(number)"
          />
          <Button
            rotulo="Corrigir"
            estilo="corrige"
            @botaoAtivado="corrigir()"
          />
          <Button
            rotulo="Branco"
            estilo="branco"
            @botaoAtivado="branco()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CandidateStorege from "../classes/CandidateStorege";
import VotationStorege from "../classes/VotationStorege";
import Candidate from "../classes/Candidate";
import Button from "../components/Button";
export default {
  components: {
    Button,
  },
  data() {
    return {
      number: "",
      imagem: this.$baseUrl + "img/padrao.cb23a20f.jpg",
      candidate: new Candidate(),
    };
  },
  created() {
    this.candidates = new CandidateStorege("candidates");
    this.votation = new VotationStorege("votation");
  },
  methods: {
    addNum(num) {
      this.number = this.number + num;
      this.candidate = this.candidates.get(
        "candidates",
        this.number
      );
      this.buscaImagem();
    },
    buscaImagem() {
      if (this.candidate.url.length < 5) {
        this.imagem =
          this.$baseUrl + "img/padrao.cb23a20f.jpg";
      } else {
        this.imagem = this.candidate.url;
      }
    },
    corrigir() {
      this.number = "";
      this.imagem =
        this.$baseUrl + "img/padrao.cb23a20f.jpg";
      this.candidate = new Candidate();
    },
    confirmar(num) {
      this.candidates.vote("candidates", num);
      this.corrigir();
      alert("Voto computado");
    },
    branco() {
      this.votation.branco("votation");
      this.votation.vota("votation");
      this.corrigir();
      alert("Voto em Branco computado");
    },
  },
};
</script>

<style scoped>
.eleition {
  width: 100%;
  height: 90vh;
}
.box {
  display: flex;
  max-width: 750px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
}
.form {
  width: 310px;
  border: solid 2px rgb(0, 0, 0);
  border-radius: 30px;
  padding: 10px 15px;
  text-align: center;
  margin-top: 80px;
}
.titulo ~ .info {
  margin-top: 20px;
}
.imagem {
  margin-top: 25px;
  margin-bottom: 25px;
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
.info input,
p {
  border-radius: 8px;
  width: 230px;
  font-size: 18px;
  font-weight: 900;
  text-align: center;
}
.teclado {
  width: 290px;
  border: solid 2px rgb(0, 0, 0);
  border-radius: 30px;
  padding: 10px 15px;
  text-align: center;
  margin-top: 80px;
}
.setor {
  border: solid 2px rgb(0, 0, 0);
  border-radius: 30px;
  margin-bottom: 15px;
}
.button {
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
}
</style>

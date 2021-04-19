<template>
  <div class="contend" v-if="this.candidatos.length !== 0">
    <Painel
      v-for="candidato in this.candidatos"
      :key="candidato"
      :photo="candidato.url"
      :name="candidato.name"
      :numero="candidato.numero"
      :partido="candidato.partido"
    >
      <Button
        class="button"
        rotulo="Deletar"
        :confirmacao="true"
        estilo="excluir"
        menssage="Tem certeza que quer deletar esse candidadto"
        @botaoAtivado="deleted(candidato)"
      />
    </Painel>
  </div>
  <div class="contend" v-else>
    <Warning />
  </div>
</template>

<script>
import CandidateStorege from "../classes/CandidateStorege";
import Painel from "../components/Painel";
import Button from "../components/Button";
import Warning from "../components/Warning";
export default {
  components: {
    Painel,
    Button,
    Warning,
  },
  data() {
    return {
      candidatos: [],
    };
  },
  created() {
    this.candidates = new CandidateStorege("candidates");
    let candidates = this.candidates.getAll("candidates");
    this.candidatos = candidates;
  },
  methods: {
    deleted(candidato) {
      this.candidates.delete(
        "candidates",
        candidato.numero
      );
      let indice = this.candidatos.indexOf(candidato);
      this.candidatos.splice(indice, 1);
    },
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
.button {
  margin-top: 15px;
}
</style>

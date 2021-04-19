<template>
  <div class="contend" v-if="this.candidatos.length !== 0">
    <Painel
      v-for="candidato in this.candidatos"
      :key="candidato"
      :photo="candidato.url"
      :name="candidato.name"
      :numero="candidato.votos"
      :partido="calcula(candidato.votos, 5)"
      txt_numero="Votos: "
      txt_partido="Total: "
    >
    </Painel>
  </div>
  <div class="contend" v-else>
    <Warning />
  </div>
</template>

<script>
import CandidateStorege from "../classes/CandidateStorege";
import Painel from "../components/Painel";
import Warning from "../components/Warning";
export default {
  components: {
    Painel,
    Warning,
  },
  data() {
    return {
      candidatos: [],
    };
  },
  created() {
    this.candidates = new CandidateStorege("candidates");
    this.candidatos = this.candidates.getAll("candidates");
    this.votation = new CandidateStorege("votation");
    this.votation.set("votation", "total", 0);
    this.votation.set("votation", "nulo", 0);
    this.votation.set("votation", "branco", 0);
  },
  methods: {
    calcula(votos, total) {
      return (votos / total) * 100 + "%";
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

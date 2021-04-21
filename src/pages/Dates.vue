<template>
  <div class="contend" v-if="this.candidatos.length !== 0">
    <Painel
      v-for="candidato in this.candidatos"
      :key="candidato"
      :photo="candidato.url"
      :name="candidato.name"
      :numero="candidato.votos"
      :partido="calcula(candidato.votos)"
      txt_numero="Votos: "
      txt_partido="Total: "
    >
    </Painel>
    <Painel
      :photo="this.$baseUrl + 'img/padrao.cb23a20f.jpg'"
      name="Nullo"
      :numero="vota.nulo"
      :partido="calcula(vota.nulo)"
      txt_numero="Votos: "
      txt_partido="Total: "
    >
    </Painel>
    <Painel
      :photo="this.$baseUrl + 'img/padrao.cb23a20f.jpg'"
      name="Branco"
      :numero="vota.branco"
      :partido="calcula(vota.branco)"
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
import VotationStorege from "../classes/VotationStorege";
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
    this.votation = new VotationStorege("votation");
    this.vota = this.votation.get("votation");
    console.log(this.vota);
  },
  methods: {
    calcula(votos) {
      let total = this.votation.get("votation").total;
      if (total === 0) return "0%";
      else return ((votos / total) * 100).toFixed(1) + "%";
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

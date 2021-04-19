<template>
  <div class="card">
    <img :src="photo" alt="" class="photo" />
    <h1 class="titulo">{{ name }}</h1>
    <h3 class="info numero">{{txt_numero}}{{ numero }}</h3>
    <h3 class="info partido">{{txt_partido}}{{ partido }}</h3>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    photo: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    numero: {
      type: String,
      require: true,
    },
    partido: {
      type: String,
      require: true,
    },
    txt_numero:{
      type: String,
      require: true,
    },
    txt_partido: {
      type: String,
      require: true,
    }
  },
  methods: {
    persist() {
      localStorage.name = JSON.stringify({
        name: this.name,
        nome: this.name,
        teme: this.name,
      });
      console.log(localStorage.name);
    },
  },
};
</script>

<style scoped>
.card {
  width: 200px;
  height: 300px;
  background-color: rgb(238, 238, 238);
  border: solid 2px rgb(0, 0, 0);
  border-radius: 20px;
  display: inline-block;
  margin: 10px;
}
.photo {
  margin-top: 15px;
  width: 120px;
  height: 100px;
  border: solid 2px rgb(0, 0, 0);
  border-radius: 70px;
}
.titulo {
  margin-bottom: 10px;
}
.info {
  color: rgb(109, 108, 108);
  text-align: left;
  margin-left: 25px;
}
</style>

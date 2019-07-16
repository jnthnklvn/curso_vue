<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr />
    <p>{{ cpf | cpf | inverter}}</p>
    <input type="text" :value="cpf | cpf | inverter" />
    <hr />
    <input type="text" :value="itens | espacoToVirgula" />
    <p>{{ itens | espacoToVirgula}}</p>
    <p>{{ itens | contarTamanhoPalavras}}</p>
    <hr>
    <input type="text" v-model="items">
    <p>{{ itemsComVirgulas }}</p>
    <hr />
    <Frutas />
    <div>
      <ul>
        <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
      </ul>
      <input type="text" v-model="fruta" @keydown.enter="add" />
    </div>
  </div>
</template>

<script>
import Frutas from "@/components/Frutas.vue";
import FrutasMixin from "@/frutasMixin";
export default {
  components: { Frutas },
  mixins: [FrutasMixin],
  filters: {
    cpf(valor) {
      const arr = valor.split("");
      arr.splice(3, 0, ".");
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");
      return arr.join("");
    },
    espacoToVirgula(valor) {
      const arr = valor.split(" ");
      return arr.toString();
    }
  },
  data() {
    return {
      cpf: "07918533578",
      itens: "Eu você e o zubumafu",
      items: "bola carro luz"
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}

input {
  font-size: 2.5rem;
}
</style>

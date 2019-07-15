<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr />
    <p v-text="'Texto usando v-text'"></p>
    <p v-html="'Texto usando <strong>v-html</strong>'"></p>
    <hr />
    <p v-destaque-local:fundo.atrasar="'lightgreen'">Usando diretiva personalizada</p>
    <p v-destaque-local.atrasar="cor">Usando diretiva personalizada</p>
  </div>
</template>

<script>
export default {
  directives: {
    "destaque-local": {
      bind(el, binding, vnode) {
        //el.style.backgroundColor = 'lightgreen'
        let atraso = 0;

        if (binding.modifiers["atrasar"]) atraso = 2000;

        setTimeout(() => {
          if (binding.arg === "fundo") {
            el.style.backgroundColor = binding.value;
          }
          //el.style.backgroundColor = 'lightgreen'
          else {
            el.style.color = binding.value;
          }
        }, atraso);
      }
    }
  },
  data() {
    return {
      cor: "lightblue"
    };
  }
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
</style>

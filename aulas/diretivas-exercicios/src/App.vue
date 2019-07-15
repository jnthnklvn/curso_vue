<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr />
    <p v-text="'Texto usando v-text'"></p>
    <p v-html="'Texto usando <strong>v-html</strong>'"></p>
    <hr />
    <p v-destaque-local:fundo.atrasar="'lightgreen'">Usando diretiva personalizada</p>
    <p v-destaque-local.atrasar.alternar="cor">Usando diretiva personalizada</p>
  </div>
</template>

<script>
export default {
  directives: {
    "destaque-local": {
      bind(el, binding, vnode) {
        const aplicarCor = cor => {
          if (binding.arg === "fundo") {
            el.style.backgroundColor = cor;
          }
          //el.style.backgroundColor = 'lightgreen'
          else {
            el.style.color = cor;
          }
        };

        let atraso = 0;

        if (binding.modifiers["atrasar"]) atraso = 2000;

        let cor1 = binding.value;
        let cor2 = "purple";
        let corAtual = cor1;

        setTimeout(() => {
          if (binding.modifiers["alternar"]) {
            setInterval(() => {
              corAtual = corAtual === cor1 ? cor2 : cor1;
              aplicarCor(corAtual);
            }, 1000);
          } else {
            aplicarCor(binding.value);
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

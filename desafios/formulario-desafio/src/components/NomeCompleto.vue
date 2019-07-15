<template>
  <div>
    <Rotulo nome="Nome">
      <input @change="$emit('input', nomeCompleto)" type="text" v-model="nomeCompleto.nome" />
    </Rotulo>
    <Rotulo nome="Sobrenome">
      <input
        @change="$emit('input', nomeCompleto)"
        type="text"
        v-model="nomeCompleto.sobrenome"
      />
    </Rotulo>
  </div>
</template>

<script>
import Rotulo from "@/components/Rotulo.vue";
export default {
  components: { Rotulo },
  data() {
    return {
      nomeCompleto: {
        nome: "",
        sobrenome: ""
      }
    };
  }
};
</script>

<style>
</style>

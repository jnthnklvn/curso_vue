<template>
  <div class="tarefas">
    <template v-if="tarefas.length">
      <Tarefa
        v-for="(tarefa, i) in tarefas"
        :key="tarefa.name"
        :tarefa="tarefa"
        @tarefaDeletada="$emit('tarefaDeletada', i)"
        @stateChange="$emit('stateChange', i)"
      ></Tarefa>
    </template>
    <p v-else class="sem-tarefas">Sua vida está em dia :)</p>
  </div>
</template>
<script>
import Tarefa from "@/components/Tarefa.vue";
export default {
  components: { Tarefa },
  props: { tarefas: Array, required: true }
};
</script>

<style>

.tarefas {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.tarefas .tarefa {
  margin: 10px;
}

.sem-tarefas {
  color: #aaa;
  font-size: 1.7rem;
}
</style>

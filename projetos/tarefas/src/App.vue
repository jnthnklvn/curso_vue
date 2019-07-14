<template>
  <div id="app">
    <h1>Tarefas</h1>
    <ProgressoTarefas :progresso="progresso"></ProgressoTarefas>
    <NovaTarefa @tarefaAdicionada="addTarefa"></NovaTarefa>
    <Tarefas :tarefas="tarefas" @tarefaDeletada="delTarefa" @stateChange="setTarefaState" />
  </div>
</template>

<script>
import Tarefas from "@/components/Tarefas.vue";
import ProgressoTarefas from "@/components/ProgressoTarefas.vue";
import NovaTarefa from "@/components/NovaTarefa.vue";
export default {
  components: { NovaTarefa, Tarefas, ProgressoTarefas },
  data() {
    return {
      tarefas: []
    };
  },
  computed: {
    progresso() {
      const total = this.tarefas.length;
      const done = this.tarefas.filter(t => !t.todo).length;
      return Math.round((done / total) * 100) || 0;
    }
  },
  watch: {
    tarefas: {
      deep: true,
      handler(){
        localStorage.setItem("tarefas", JSON.stringify(this.tarefas));
      }
    }
  },
  methods: {
    addTarefa(tarefa) {
      const sameName = t => t.name === tarefa.name;
      const reallyNew = this.tarefas.filter(sameName).length == 0;
      if (reallyNew) {
        this.tarefas.push({ name: tarefa.name, todo: tarefa.name || true });
      }
    },
    delTarefa(i) {
      this.tarefas.splice(i, 1);
    },
    setTarefaState(i) {
      this.tarefas[i].todo = !this.tarefas[i].todo;
    }
  },
  created() {
    const json = localStorage.getItem("tarefas");
    const array = JSON.parse(json);
    this.tarefas = Array.isArray(array) ? array : []
  }
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>

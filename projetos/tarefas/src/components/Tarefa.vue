<template>
  <div class="tarefa" :class="stateClass" @click="$emit('stateChange')">
    <span @click.stop="$emit('tarefaDeletada')" class="close">x</span>
    <p>{{ tarefa.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    tarefa: { type: Object, required: true }
  },
  computed: {
    stateClass() {
      return {
        todo: this.tarefa.todo,
        done: !this.tarefa.todo
      };
    }
  },
  methods: {
    setState() {
      this.tarefa.todo = !this.tarefa.todo;
    }
  }
};
</script>

<style>
.tarefa {
  position: relative;
  box-sizing: border-box;
  width: 350px;
  height: 150px;
  padding: 10px;
  border-radius: 8px;
  font-size: 2rem;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.done {
  display: inline-flex;
  margin: 10px;
  border-left: 15px solid green;
  background-color: #02ac02;
  text-decoration: line-through;
}

.todo {
  display: inline-flex;
  margin: 10px;
  border-left: 15px solid #b40101;
  background-color: red;
}

.todo .close {
  background-color: #b40101;
}

.done .close {
  background-color: green;
}

.close {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}
</style>

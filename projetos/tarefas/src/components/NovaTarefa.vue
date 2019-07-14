<template>
  <div class="nova-tarefa">
    <input @change="add" v-model="name" type="text" class="form-element" placeholder="Nova tarefa?" />
    <button class="form-element" type="submit">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    add() {
      this.$emit("tarefaAdicionada", { name: this.name });
      this.name = "";
    }
  }
};
</script>

<style>
.nova-tarefa {
  margin: 35px;
}

.form-element {
  outline: none;
  font-size: 2rem;
  border: 1px solid #fff;
  padding: 5px 10px 8px;
  color: #fff;
}

input.form-element {
  width: 500px;
  background: #fff2;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

button.form-element {
  border-left: none;
  background-color: #2196f3;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}
</style>

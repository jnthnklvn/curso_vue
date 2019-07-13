<template>
  <div class="citacao">
    <slot></slot>
    <div class="autor">
      <slot name="autor"></slot>
    </div>
    <slot name="fonte"></slot>
    <!-- <p>{{ citacao.texto }}</p> -->
  </div>
</template>

<script>
export default {
  props: ["citacao"]
};
</script>

<style scoped>
.citacao {
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 450px;
}
.autor {
  float: right;
}
h1 {
  color: #032703 !important;
}
</style>

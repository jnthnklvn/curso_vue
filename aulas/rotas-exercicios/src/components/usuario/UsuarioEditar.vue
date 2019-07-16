<template>
  <div class="usuario-editar">
    <h3>Usuario Editar</h3>
    <hr />
    <p>
      <strong>Codigo</strong>
      {{ id }}
    </p>
    <p>
      <strong>Codigo</strong>
      $route {{ $route.params.id }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["id"]
};
</script>

<style>
</style>

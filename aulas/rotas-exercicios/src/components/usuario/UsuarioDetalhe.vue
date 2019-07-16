<template>
  <div class="usuario-detalhe">
    <h3>Usuario Detalhe</h3>
    <hr />
    <p>
      <strong>Codigo</strong>
      {{ id }}
    </p>
    <!-- <router-link tag="button" primario :to="`/usuario/${id}/editar`">Editar</router-link> -->
    <!-- :to="`/usuario/${this.$route.params.id}/editar`" -->
    <router-link
      tag="button"
      primario
      :to="{ name: 'editarUsuario', params: {id}, query: {completo: true, lingua: 'pt'}}"
    >Editar</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"]
  /* data() {
    return {
      id: this.$route.params.id
    };
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id;
    }
  }, */
};
</script>

<style>
</style>

<template>
  <div class="usuario-editar">
    <h3>Usuario Editar</h3>
    <hr />
    <p>
      <strong>Codigo</strong>
      {{ id }}
    </p>
    <p>
      <strong>Completo</strong>
      {{ $route.query.completo ? 'Sim' : 'Nao' }}
    </p>
    <p>
      <strong>Completo</strong>
      {{ $route.query.lingua }}
    </p>
    <p>
      <strong>Codigo</strong>
      $route {{ $route.params.id }}
    </p>
    <hr />
    <button primario @click="confirmou = true">Confirmar</button>
    <div id="rodape">
      <h3>Curso Vue</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  beforeRouteEnter: (to, from, next) => {
    console.log("antes da rota -> usuario editar");
    /* next(vm => {
      console.log(vm.id);
    }); */
    const autenticado = true;
    autenticado == true ? next() : next(false);
  },
  data() {
    return {
      confirmou: false
    };
  },
  beforeRouteLeave(to, from, next) {
    this.confirmou == true
      ? next()
      : confirm("Tem certeza?") == true
      ? next()
      : next(false);
  }
};
</script>

<style>
#rodape {
  margin-top: 1000px;
}
</style>

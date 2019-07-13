<template>
    <div class="citacao">
        <slot></slot>
        <!-- <p>{{ citacao.texto }}</p> -->
    </div>
</template>

<script>
export default {
  props:  ['citacao'],
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    h1{
        color: #032703!important;
    }
</style>

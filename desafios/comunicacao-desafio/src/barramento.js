import Vue from 'vue';
export default new Vue({
    methods: {
        alterarUsuario(usuario) {
            this.$emit('usuarioMudou', usuario)
        },
        onUsuarioChange(callback) {
            this.$on('usuarioMudou', callback)
        }
    },
})
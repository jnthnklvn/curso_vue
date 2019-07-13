import Vue from 'vue';
export default new Vue({
    methods: {
        alterarIdade(idade) {
            this.$emit('idadeMudou', idade)
        },
        onIdadeChange(callback) {
            this.$on('idadeMudou', callback)
        }
    },
});
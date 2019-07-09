new Vue({
    el: '#app',
    data: {
        titulo: 'Usando VueJS!'
    },
    methods: {
        alterarTitulo(event) {
            this.titulo = event.target.value
        }
    }
})
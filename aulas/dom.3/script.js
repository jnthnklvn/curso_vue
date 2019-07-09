new Vue({
    el: '#app',
    data: {
        titulo: 'Usando VueJS!',
        link: 'http://google.com.br'
    },
    methods: {
        saudacao: function () {
            this.titulo = 'Bom dia!!!'
            return this.titulo
        }
    }
})
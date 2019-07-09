new Vue({
    el: '#app',
    data: {
        aplicarC1: false,
        classeCSS: 'c1',
        aplicarGirar: false,
    },
    computed: {
        estilo1(){
            return {
                c1: this.aplicarC1,
                c2: !this.aplicarC1,
            }
        }
    },
})
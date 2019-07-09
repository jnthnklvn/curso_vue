new Vue({
    el: '#app',
    data: {
        contador: 0,
        contador2: 2,
    },
    computed: {
        resultado() {
            console.log("Oi, eu sou o console")
            return this.contador >= 5 ? 'Maior ou igual a 5' : 'Menor que 5'
        }
    },
    methods: {
        aumentar() {
            this.contador++
        },
        aumentar2() {
            this.contador2++
        },
        diminuir() {
            this.contador--
        },
        /* resultado() {
            console.log("Oi, eu sou o console")
            return this.contador >= 5 ? 'Maior ou igual a 5' : 'Menor que 5'
        } */
    }
})
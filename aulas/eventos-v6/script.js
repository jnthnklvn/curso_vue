new Vue({
    el: '#app',
    data: {
        contador: 0,
        x: 0,
        y: 0,
    },
    methods: {
        somar(passo, event) {
            console.log(event)
            this.contador += passo
        }
    }
})
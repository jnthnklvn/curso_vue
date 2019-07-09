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
        },
        atualizarXY(event) {
            this.x = event.clientX
            this.y = event.clientY
        },
        parar(event){
            event.stopPropagation()
        },
        naoNavegar(event){
            event.preventDefault()
        }
    }
})
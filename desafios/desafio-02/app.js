new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert("Voce me clicou!")
        },
        setValor(){
            this.valor = event.target.value
        }
    }
})
new Vue({
    el: '#app',
    data: {
        cor: 'red',
        largura: 100,
        altura: 200,
    },
    computed: {
        meuEstilo(){
            return{
                backgroundColor: this.cor,
                width: `${this.largura}px`
            }
        }
    },
})
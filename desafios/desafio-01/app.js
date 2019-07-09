new Vue({
    el: '#desafio',
    data: {
        nome: 'Jonathan',
        idade: 21,
        imgLink: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    },
    methods: {
        gerarNumero () {
            return Math.random()
        }
    }
})
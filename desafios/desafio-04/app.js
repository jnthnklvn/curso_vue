new Vue({
    el: '#desafio',
    data: {
        classeEfeito: 'destaque',
        c1: 'c1',
        destaque: 'destaque',
        inputClass: '',
        inputClass2: '',
        perigo: false,
        enquadrar: {
            width: 100,
            height: 100,
        },
        cor: 'purple',
        andamento: '',
        status: '',
    },
    methods: {
        iniciarEfeito() {
            setInterval(() => {
                this.classeEfeito = this.classeEfeito == 'destaque' ? 'encolher' : 'destaque'
            }, 1000)
        },
        iniciarProgresso() {
            this.andamento = 0
            this.status = 'Carregando: '
            setInterval(() => {
                if ((this.andamento < 100)) {
                    this.andamento += 1
                } else { return 0 }
            }, 200)
            this.status = 'Concluido!'
        },
        setPerigo() {
            this.perigo = event.target.value == 'true' ? true : false
        }
    },
})
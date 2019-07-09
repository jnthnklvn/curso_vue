new Vue({
    el: '#app',
    data: {
        playerLife: 100,
        monsterLife: 100,
        runningGame: false,
        playerPower: 6,
        monsterPower: 8,
        playerHeal: 3,
        monsterHeal: 1,
        logs: [],
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        runGame() {
            this.runningGame = true
            this.playerLife = 100
            this.monsterLife = 100
            this.playerPower = 6
            this.playerHeal = 2
            this.logs = []
        },

        attack(especial) {
            this.hurtMonster(especial)
            if (this.monsterLife >= 0) {
                this.hurtPlayer()
                this.playerPower *= especial == true ? 0.75 : 1
                if (this.monsterLife >= 20) this.healMonster()
            }
        },

        hurtPlayer() {
            this.hurt('playerLife', this.monsterPower, this.monsterPower * 2, false, 'Monstro', 'Jogador', 'playerHurted')
        },

        hurtMonster(especial) {
            this.hurt('monsterLife', this.playerPower, this.playerPower * 2, especial, 'Jogador', 'Monstro', 'monsterHurted')
        },

        hurt(attr, min, max, especial, source, target, style) {
            const boost = especial == true ? this.getRandom(2, 3) : 1
            const hurt = this.getRandom(min * boost, max * boost)
            this[attr] = Math.max(this[attr] - hurt, 0)
            this.registerLog(`${source} antigiu ${target} com ${hurt}.`, style)
        },

        hurtAndAbsorb() {
            this.absorb()
            this.hurtPlayer()
            if (this.monsterLife >= 20) this.healMonster()
        },

        healMonster() {
            setTimeout(() => {
                this.monsterLife = Math.min(this.monsterLife + this.monsterHeal, 100)
                this.registerLog(`Monstro curou ${this.monsterHeal}.`, 'monsterHeal')
            }, 100)
        },

        absorb() {
            const heal = this.getRandom(this.monsterPower, this.monsterPower) * this.playerHeal
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.playerHeal -= 0.1
            this.registerLog(`Jogador absorveu ${heal.toFixed(2)}.`, 'playerAbsorb')
        },

        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },

        registerLog(text, style) {
            this.logs.unshift({ text, style })
        }
    },
    watch: {
        hasResult(value) {
            if (value) {
                this.runningGame = false
            }
        }
    },
})
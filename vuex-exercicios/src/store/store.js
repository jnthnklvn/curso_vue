import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        produtos: [
        ]
    },
    getters: {
        valorTotal(state) {
            return state.produtos
                .map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0);
        }
    }
})

export default store
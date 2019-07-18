import Vue from 'vue'
import Vuex from 'vuex'
import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

import * as getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        nome: 'Marina',
        sobrenome: 'Silva',
    },
    getters,
    /* getters: {
        ...getters
    }, */
    modules: { carrinho, parametros }
})

export default store
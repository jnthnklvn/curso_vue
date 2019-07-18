import Vue from 'vue'
import Vuex from 'vuex'
import carrinho from './modules/carrinho'
import parametros from './modules/parametros'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: { carrinho, parametros }
})

export default store
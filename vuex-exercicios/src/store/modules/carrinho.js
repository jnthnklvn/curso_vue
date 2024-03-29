export default {
    namespaced: true,
    state: {
        produtos: [
        ],
    },
    getters: {
        valorTotal(state, getters, rootState) {
            return state.produtos
                .map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0);
        }
    },
    mutations: {
        adicionarProduto(state, payload) {
            state.produtos.push(payload)
        },
    },
    actions: {
        /* adicionarProduto: {
            root: true,
            handler({ commit }, payload) {
                setTimeout(() => {
                    commit('adicionarProduto', payload)
                }, 1000)
            }
        } */
        adicionarProduto(context, payload) {
            setTimeout(() => {
                context.commit('adicionarProduto', payload)
            }, 1000)
        }
    }
}
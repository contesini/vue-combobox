export default {
    state: {
        quantidade: 0,
        valor: 0.0
    },
    mutations: {
        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        setValor(state, payload) {
            state.valor = payload
        }
    }
}
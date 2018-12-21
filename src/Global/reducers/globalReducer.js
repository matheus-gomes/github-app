import { TYPE_SET_USUARIO_LOGADO, TYPE_SET_CARREGANDO } from "../actions/globalActions";

let init = {
    usuarioLogado: null,
    carregando: true,
}

export const globalReducer = ((state = init, action) => {
    switch(action.type) {
        case TYPE_SET_USUARIO_LOGADO: {
            state.carregando = false
            state.usuarioLogado = action.payload
            return state;
        }
        case TYPE_SET_CARREGANDO: {
            state.carregando = action.payload
            return state;
        }
        default:
            return state;
    }
})
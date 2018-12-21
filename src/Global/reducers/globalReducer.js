import { TYPE_SET_USUARIO_LOGADO } from "../actions/globalActions";

let init = {
    usuarioLogado: null,
}

export const globalReducer = ((state = init, action) => {
    switch(action.type) {
        case TYPE_SET_USUARIO_LOGADO: {
            state.usuarioLogado = action.payload
            return state;
        }
        default:
            return state;
    }
})
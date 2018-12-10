import { TYPE_SET_USUARIO_LOGADO } from "../actions/globalActions";
import { TYPE_SET_GITHUB_USER } from "../actions/globalActions";

let init = {
    usuarioLogado: null,
    gh: null
}

export const globalReducer = ((state = init, action) => {
    switch(action.type) {
        case TYPE_SET_USUARIO_LOGADO: {
            state.usuarioLogado = action.payload
            return state;
        }
        case TYPE_SET_GITHUB_USER: {
            state.gh = action.payload
            return state;
        }
        default:
            return state;
    }
})
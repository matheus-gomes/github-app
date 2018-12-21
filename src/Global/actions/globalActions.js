export const TYPE_SET_USUARIO_LOGADO = 1;

export const setUsuarioLogado = (data) => ({
    type: TYPE_SET_USUARIO_LOGADO,
    payload: data
})
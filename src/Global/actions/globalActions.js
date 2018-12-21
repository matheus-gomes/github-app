export const TYPE_SET_USUARIO_LOGADO = 1;
export const TYPE_SET_CARREGANDO = 2;

export const setUsuarioLogado = (data) => ({
    type: TYPE_SET_USUARIO_LOGADO,
    payload: data
})

export const setCarregando = (data) => ({
    type: TYPE_SET_CARREGANDO,
    payload: data
})
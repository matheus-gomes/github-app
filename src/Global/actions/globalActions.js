export const TYPE_SET_USUARIO_LOGADO = 1;
export const TYPE_SET_GITHUB_USER = 2;


export const setUsuarioLogado = (data) => ({
    type: TYPE_SET_USUARIO_LOGADO,
    payload: data
})

export const setUsuarioGithub = (data) => ({
    type: TYPE_SET_GITHUB_USER,
    payload: data
})
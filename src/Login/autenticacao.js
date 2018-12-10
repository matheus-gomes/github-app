import globalStore, { setUsuarioGithub } from "../Global"
import GitHub from 'github-api';


export function loginGithub(email, senha) {
    globalStore.dispatch(setUsuarioGithub(
        
    ))
}
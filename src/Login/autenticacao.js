import globalStore, { setUsuarioGithub, setUsuarioLogado } from "../Global"
import * as firebase from 'firebase'
import Firebase from "../Firebase";


export async function loginWithGithub() {
    return (await authPromise).signInWithPopup(new firebase.auth.GithubAuthProvider())
}

const authPromise = new Promise((resolve, reject) => {
    let auth = Firebase.firebaseAuth;
    auth.onAuthStateChanged(async (user) => {
        const usuarioLogado = user ? {
            id: user.uid,
            nome: user.displayName || user.email,
            email: user.email,
            foto: user.photoURL,
        } : false
        globalStore.dispatch(setUsuarioLogado(usuarioLogado));
    })
    resolve(auth)
})
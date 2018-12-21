import * as firebase from "firebase"

let _firebaseAuth = null
let _firestore = null

const Firebase = {
    connect() {
        if (_firestore) return;
        var config = {
            apiKey: "AIzaSyAAhmgIpQSmzrF3964TwRZegcG2j5l0ogo",
            authDomain: "github-app-23a93.firebaseapp.com",
            databaseURL: "https://github-app-23a93.firebaseio.com",
            projectId: "github-app-23a93",
            storageBucket: "github-app-23a93.appspot.com",
            messagingSenderId: "263215484736"
        };
        firebase.initializeApp(config);
        _firebaseAuth = firebase.auth();
        _firestore = firebase.firestore();
    },

    get firebaseAuth() {
        return _firebaseAuth;
    },

    get firestore() {
        return _firestore
    }
}

Firebase.connect();
export const firestore = _firestore
export const firebaseAuth = _firebaseAuth;

export default Firebase;
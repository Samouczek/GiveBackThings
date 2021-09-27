import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyD10SDxSYgG-iqzjlN841PZbO7p9CHQEp4",
    authDomain: "givebackthings.firebaseapp.com",
    projectId: "givebackthings",
    storageBucket: "givebackthings.appspot.com",
    messagingSenderId: "792391839843",
    appId: "1:792391839843:web:5183b6b517e453bc5a4856"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {db};
export default firebase;
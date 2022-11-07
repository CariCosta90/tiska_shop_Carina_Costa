
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDmOKkoAu1q0ctUFEL1ahAMs8BPXxB2TFw",
    authDomain: "tiska-shop.firebaseapp.com",
    projectId: "tiska-shop",
    storageBucket: "tiska-shop.appspot.com",
    messagingSenderId: "1042418464277",
    appId: "1:1042418464277:web:3dde1cd86dc0a8893c801c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
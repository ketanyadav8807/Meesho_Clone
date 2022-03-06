import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCY1SyOTsw6cfIw-rzyQsbXZSyleD9DzFc",
    authDomain: "fir-auth-10689.firebaseapp.com",
    projectId: "fir-auth-10689",
    storageBucket: "fir-auth-10689.appspot.com",
    messagingSenderId: "959246487920",
    appId: "1:959246487920:web:87794aaba0c25857c27fb5"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)
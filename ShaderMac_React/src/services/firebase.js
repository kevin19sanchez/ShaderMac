// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCI8PtNGtn4DMe9kntUazMCepX6rV24Nk",
    authDomain: "shadermac-6af4c.firebaseapp.com",
    databaseURL: "https://shadermac-6af4c-default-rtdb.firebaseio.com",
    projectId: "shadermac-6af4c",
    storageBucket: "shadermac-6af4c.firebasestorage.app",
    messagingSenderId: "705174910477",
    appId: "1:705174910477:web:44115c05d863e6fdf88744"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializamos la base de datos
const database = getDatabase(app);

export {app, database}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGPglymdD2PIUsbPlxqRV2lNmVHDyzUXA",
    authDomain: "svelte-journal-b260c.firebaseapp.com",
    projectId: "svelte-journal-b260c",
    storageBucket: "svelte-journal-b260c.appspot.com",
    messagingSenderId: "766715510749",
    appId: "1:766715510749:web:0f6492119da4953ef94034",
    measurementId: "G-M8CTE80QSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
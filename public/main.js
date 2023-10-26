// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, setLogLevel, get , child } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1WNsb_K_Jj_nuPPbpZSeuWTgChkpoZSg",
  authDomain: "login-form-2211b.firebaseapp.com",
  projectId: "login-form-2211b",
  storageBucket: "login-form-2211b.appspot.com",
  messagingSenderId: "230178625784",
  appId: "1:230178625784:web:51e9718b74c0dc74dcc30d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);


document.getElementById("submit").addEventListener('click',  function(e){
    set(ref(db, 'user/' + document.getElementById("name").value),{
        name: document.getElementById("name").value,
        password: document.getElementById("password").value
    });
    console.log("login successfully");
});
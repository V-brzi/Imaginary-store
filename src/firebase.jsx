// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHDWtYl0Sgb1zxIO_6y9UbzfGY0vkbrGQ",
  authDomain: "imaginary-store-project.firebaseapp.com",
  projectId: "imaginary-store-project",
  storageBucket: "imaginary-store-project.appspot.com",
  messagingSenderId: "757477914934",
  appId: "1:757477914934:web:71edfe65cadde18f521b97",
  databaseURL: "https://imaginary-store-project.europe-west3.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init services
const db = getFirestore(app);

export {app, db};


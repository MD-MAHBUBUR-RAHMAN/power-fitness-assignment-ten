// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcPmNOAxtCqCM4K_5EAuQZDNFTb4_UAIs",
  authDomain: "power-fitness-cd742.firebaseapp.com",
  projectId: "power-fitness-cd742",
  storageBucket: "power-fitness-cd742.appspot.com",
  messagingSenderId: "263778452870",
  appId: "1:263778452870:web:f03ce4c92f49b629039807",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOIeHqElDat5Az3G2l1Lw-dqZYQdgFfAM",
  authDomain: "bistro-boss-client-8780a.firebaseapp.com",
  projectId: "bistro-boss-client-8780a",
  storageBucket: "bistro-boss-client-8780a.appspot.com",
  messagingSenderId: "102993050061",
  appId: "1:102993050061:web:b7449eb85bc0d879d92c84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

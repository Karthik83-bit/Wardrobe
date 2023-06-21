import { initializeApp, } from "firebase/app";
import {getAuth} from 'firebase/auth'



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVLTiZtK18bkiRB0NVoNwEFgJ6GCkj6Nk",
  authDomain: "auth-test-cd37a.firebaseapp.com",
  projectId: "auth-test-cd37a",
  storageBucket: "auth-test-cd37a.appspot.com",
  messagingSenderId: "768676142780",
  appId: "1:768676142780:web:d611c5e68c045b30cc3ab9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()

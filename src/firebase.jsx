// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtJZdU8Fc8aY4GoDE06btYnPF_M-L4HIU",
  authDomain: "samovar-for-oleg.firebaseapp.com",
  projectId: "samovar-for-oleg",
  storageBucket: "samovar-for-oleg.appspot.com",
  messagingSenderId: "924068798273",
  appId: "1:924068798273:web:f929f6b7ee22930a884bc0",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default getFirestore()

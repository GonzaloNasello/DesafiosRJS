import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCH9CH8HZPOpbP-O4ugKn60oPXOyqaAILg",
    authDomain: "tienda-comics-c4e54.firebaseapp.com",
    projectId: "tienda-comics-c4e54",
    storageBucket: "tienda-comics-c4e54.appspot.com",
    messagingSenderId: "307254268178",
    appId: "1:307254268178:web:f7c63cec559f7af9d7e3cb"
  };

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
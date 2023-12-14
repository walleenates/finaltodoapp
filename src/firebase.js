import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAbiCr6FlhVyRsxItHNucmYn3Gsr_HE5JM",
  authDomain: "todoapp-86547.firebaseapp.com",
  projectId: "todoapp-86547",
  storageBucket: "todoapp-86547.appspot.com",
  messagingSenderId: "145395955006",
  appId: "1:145395955006:web:4b24a367edd85eb20e686f"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)



export default auth
export { db };

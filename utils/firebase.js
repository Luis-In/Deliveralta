import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAzr_YGw-_mOyFiukbvUS5_1IPlZGVITEo",
  authDomain: "delivery-proyect-ab661.firebaseapp.com",
  projectId: "delivery-proyect-ab661",
  storageBucket: "delivery-proyect-ab661.appspot.com",
  messagingSenderId: "743491405947",
  appId: "1:743491405947:web:f909bccea2402ec9fbfade",
  measurementId: "G-KW9K83XGMR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore()

export { db }
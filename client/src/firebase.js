
 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "thn-sem.firebaseapp.com",
  projectId: "thn-sem",
  storageBucket: "thn-sem.appspot.com",
  messagingSenderId: "173167101269",
  appId: "1:173167101269:web:db7442df993fd6f9211bdc",
  measurementId: "G-8YJRSEFV4P"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
//  export const analytics = getAnalytics(app);
//  export const imageDb =getStorage(app);
 
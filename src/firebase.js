import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-fdc03.firebaseapp.com",
  projectId: "tutorial-fdc03",
  storageBucket: "tutorial-fdc03.appspot.com",
  messagingSenderId: "912352948441",
  appId: "1:912352948441:web:a6ab267159fd9d49450ec8",
  measurementId: "G-18J397DQD3",
};

const app = initializeApp(firebaseConfig);

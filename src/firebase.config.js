import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FA,
  authDomain: process.env.REACT_APP_AD,
  projectId: process.env.REACT_APP_PI,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_MSI,
  appId: process.env.REACT_APP_AI,
  measurementId: process.env.REACT_APP_MI,
};

const app = initializeApp(firebaseConfig);

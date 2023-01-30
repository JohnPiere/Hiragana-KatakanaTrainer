import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCW6YtGOKHkS8h_wy9T0vqz8mJALPPYVT4",
  authDomain: "your-daily-japanese.firebaseapp.com",
  projectId: "your-daily-japanese",
  storageBucket: "your-daily-japanese.appspot.com",
  messagingSenderId: "257936236873",
  appId: "1:257936236873:web:0c9430fc42cb97bb6cfa98",
  measurementId: "G-H5FT1QLEHH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

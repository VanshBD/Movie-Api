// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv_axvgZO9qDSe-Dl_taAB3xlHCecHWfQ",
  authDomain: "project1-5d1be.firebaseapp.com",
  projectId: "project1-5d1be",
  storageBucket: "project1-5d1be.appspot.com",
  messagingSenderId: "403351987910",
  appId: "1:403351987910:web:b82bc4d476f3c7c970d9c7",
  databaseUrl:"https://project1-5d1be-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
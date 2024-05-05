// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUWlNilvsXZem8bb2TruPSUp5LXbIE9uY",
  authDomain: "hotelly-app.firebaseapp.com",
  projectId: "hotelly-app",
  storageBucket: "hotelly-app.appspot.com",
  messagingSenderId: "862841318982",
  appId: "1:862841318982:web:db334df016dc119af06447",
  measurementId: "G-D311CVBC2S"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
import Firebase from "firebase/compat/app";
import "firebase/compat/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwttZ-7QLZB-WEt7oFep4_6Zt2JVSPpAw",
  authDomain: "reactportfolio-55cf3.firebaseapp.com",
  databaseURL: "https://reactportfolio-55cf3-default-rtdb.firebaseio.com",
  projectId: "reactportfolio-55cf3",
  storageBucket: "reactportfolio-55cf3.appspot.com",
  messagingSenderId: "335034011765",
  appId: "1:335034011765:web:6d286ed56ab175ba6b283c",
  measurementId: "G-MEP71QFF34",
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);
export default Firebase;

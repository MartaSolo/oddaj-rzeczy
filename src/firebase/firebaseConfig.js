import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAsOF-u_37mtGtcC9YU2nLiZrfrFMAxvBg",
//   authDomain: "oddaj-rzeczy-10922.firebaseapp.com",
//   projectId: "oddaj-rzeczy-10922",
//   storageBucket: "oddaj-rzeczy-10922.appspot.com",
//   messagingSenderId: "558753799432",
//   appId: "1:558753799432:web:09d89abba8c687c8e360bd",
// };

const app = initializeApp(firebaseConfig);

// authentication service
export const auth = getAuth(app);

export default app;

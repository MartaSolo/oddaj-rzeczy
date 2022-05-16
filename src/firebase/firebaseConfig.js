import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsOF-u_37mtGtcC9YU2nLiZrfrFMAxvBg",
  authDomain: "oddaj-rzeczy-10922.firebaseapp.com",
  projectId: "oddaj-rzeczy-10922",
  storageBucket: "oddaj-rzeczy-10922.appspot.com",
  messagingSenderId: "558753799432",
  appId: "1:558753799432:web:09d89abba8c687c8e360bd",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;

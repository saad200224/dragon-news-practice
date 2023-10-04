
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDIk6yyTsk159zbSUmDV5V1yA7wcnOAIJA",
  authDomain: "dragon-news-auth-dbba0.firebaseapp.com",
  projectId: "dragon-news-auth-dbba0",
  storageBucket: "dragon-news-auth-dbba0.appspot.com",
  messagingSenderId: "127492994395",
  appId: "1:127492994395:web:e7bc0fd43c2337cb5cd67e"
};

const app = initializeApp(firebaseConfig);

export default app;
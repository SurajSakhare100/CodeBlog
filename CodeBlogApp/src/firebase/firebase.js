import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey:String(import.meta.env.VITE_API_KEY),
  authDomain:String(import.meta.env.VITE_AUTH_DOMAIN),
  projectId:String(import.meta.env.VITE_PROJECT_ID),
  storageBucket:String(import.meta.env.VITE_STORAGE_BUCKET),
  messagingSenderId:String(import.meta.env.VITE_MESSAGING_SENDER_ID),
  appId:String(import.meta.env.VITE_APP_ID),
  databaseURL:String(import.meta.env.VITE_DATABASE_URL)
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

db.collection("blog")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });
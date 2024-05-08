import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyDE53rSrGFQQaUSZ26tQZXdjOa-kCYZaL4",
//   authDomain: "codewithsuraj-3bb7d.firebaseapp.com",
//   projectId: "codewithsuraj-3bb7d",
//   storageBucket: "codewithsuraj-3bb7d.appspot.com",
//   messagingSenderId: "532052474228",
//   appId: "1:532052474228:web:c972c6f5602b1afa9ed421",
//   measurementId: "G-LJ0HS0QFQ5",
//   databaseURL: "https://codewithsuraj-3bb7d-default-rtdb.firebaseio.com",
// };
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

// Create a Firestore reference
var db = firebase.firestore();

// Fetch data from Firestore
db.collection("blog")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is an object representing the document
      console.log(doc.data());
    });
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });
console.log(import.meta.env.VITE_API_KEY)
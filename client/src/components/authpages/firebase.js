import { initializeApp } from "firebase/app"
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAcfurBJzSwa__A2JbE7hSbRxjesIwXaOc",
  authDomain: "ecom-f6f06.firebaseapp.com",
  projectId: "ecom-f6f06",
  storageBucket: "ecom-f6f06.appspot.com",
  messagingSenderId: "549419508492",
  appId: "1:549419508492:web:aecb679c3362bafcd69f29",
  measurementId: "G-WXMC7RPVWL"
};
  const app = initializeApp(firebaseConfig);
  const auth=getAuth(app);
  const provider=new GoogleAuthProvider();
  export { auth, provider };

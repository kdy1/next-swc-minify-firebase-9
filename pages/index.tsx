import { useEffect } from "react";
import Link from "next/link";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, getDoc, doc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1bnMep051XONQKBEG86WD8u6Ne4t9dtk",
  authDomain: "swc-min.firebaseapp.com",
  projectId: "swc-min",
  storageBucket: "swc-min.appspot.com",
  messagingSenderId: "185520786347",
  appId: "1:185520786347:web:8cee4a61679e44cc04a0ee",
  measurementId: "G-P9LZ91SMSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const store = getFirestore(app);

export default function IndexPage() {
  const testRequest = async () => {
    try {
      // if run with dev will run fine and will get result from firestore
      // if run with build and start , it will only get undefined
      const result = await getDoc(doc(store, "users", "testid"));
      console.log("test result", { docSnap: result.data() });
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    testRequest();
  }, []);

  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
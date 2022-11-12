import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

import LoginPage from "./Pages/Login/Login";
import RegisterPage from "./Pages/Register/Register";

// import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//USER STATUS
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXxGHgcN4Amc2URPiDajyVg45Pt5MNosQ",
  authDomain: "react-tvmaze-exam.firebaseapp.com",
  projectId: "react-tvmaze-exam",
  storageBucket: "react-tvmaze-exam.appspot.com",
  messagingSenderId: "27571954317",
  appId: "1:27571954317:web:9b08bc2dd16417dd9878c4",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

const App = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signUp",
      element: (
        <RegisterPage
          handleInputs={(e, email, password, existingAcc) =>
            handleData(email, password, existingAcc)
          }
        />
      ),
    },
  ]);

  const handleData = (
    emailIn: string,
    passwordIn: string,
    existingAcc: boolean
  ) => {
    setEmail(emailIn);
    setPassword(passwordIn);
    handleCreationOrAccess(existingAcc);
  };

  const handleCreationOrAccess = (existingAcc: boolean) => {
    if (existingAcc) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return <RouterProvider router={router} />;
};

export default App;

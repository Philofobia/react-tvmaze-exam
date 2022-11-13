import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";

import LoginPage from "./Pages/Login/Login";
import RegisterPage from "./Pages/Register/Register";

// import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//USER STATUS
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  User,
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
  const [currentUser, setCurrentUser] = useState<User>();

  const router = createBrowserRouter([
    {
      path: "/authentication/login",
      element: (
        <LoginPage
          handleInputs={(e, email, password, existingAcc) =>
            handleData(email, password, existingAcc)
          }
          handleLogOut={(e) => handleLogOut()}
        />
      ),
    },
    {
      path: "/authentication/register",
      element: (
        <RegisterPage
          handleInputs={(e, email, password, existingAcc) =>
            handleData(email, password, existingAcc)
          }
        />
      ),
    },
    {
      path: "/",
      element: <Navigate to="/authentication/login" />,
    },
    {
      path: "*",
      element: <Navigate to="/authentication/login" />,
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
         // const user = userCredential.user;
          //  console.log("LOGGATI", user);
        })
        .catch((error) => {
         // const errorCode = error.code;
        //  const errorMessage = error.message;
          // console.log("LOGGATI", errorCode, errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         // const user = userCredential.user;
          // console.log("REGISTRATI", user);
        })
        .catch((error) => {
         // const errorCode = error.code;
         // const errorMessage = error.message;
          // console.log("REGISTRATI", errorCode, errorMessage);
        });
    }
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        //console.log("signed out", auth);
      })
      .catch((error) => {
       // const errorCode = error.code;
       // const errorMessage = error.message;
        //console.log("signed out", errorCode, errorMessage);
      });
  };
  //track the status of the user in your application
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
      }
      return () => unsubscribe();
    });
  }, []);

  return <RouterProvider router={router} />;
};

export default App;

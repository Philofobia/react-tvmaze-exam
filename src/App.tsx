import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";
import LoginPage from "./Pages/Login/Login";
import RegisterPage from "./Pages/Register/Register";
import HomePage from "./Pages/Home/Home";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import ProtectedRoute from "./context/ProtectedRoute";

// import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/authentication/login",
      element: <LoginPage />,
    },
    {
      path: "/authentication/register",
      element: <RegisterPage />,
    },
    {
      path: "/home",
      element: (
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/error/pageNotFound",
      element: <PageNotFound />,
    },
    {
      path: "/",
      element: <Navigate to="/authentication/login" />,
    },
    {
      path: "*",
      element: <Navigate to="/error/pageNotFound" />,
    },
  ]);

  return (
    <div className="mockup-phone border-primary">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <AuthContextProvider>
            <RouterProvider router={router} />
          </AuthContextProvider>
        </div>
      </div>
    </div>
  );
};

export default App;

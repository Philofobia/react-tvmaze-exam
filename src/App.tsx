import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./context/ProtectedRoute";

import { store } from "./redux/store/store";
import { Provider } from "react-redux";

import LoginPage from "./Pages/Login/Login";
import RegisterPage from "./Pages/Register/Register";
import HomePage from "./Pages/Home/Home";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import FavouritePage from "./Pages/Favourite/Favourite";

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
      path: "/favourites",
      element: (
        <ProtectedRoute>
          <FavouritePage />
        </ProtectedRoute>
      ),
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
    <AuthContextProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AuthContextProvider>
  );
};

export default App;

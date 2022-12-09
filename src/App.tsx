import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./context/ProtectedRoute";
import AuthNullRoute from "./context/AuthNullRoute";

import { Provider } from "react-redux";
import { store } from "./redux/store/store";

import LoginPage from "./Pages/Login/Login";
import RegisterPage from "./Pages/Register/Register";
import HomePage from "./Pages/Home/Home";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import FavouritePage from "./Pages/Favourite/Favourite";
import ShowDetailsPage from "./Pages/ShowDetails/ShowDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/authentication/login",
      element: (
        <AuthNullRoute>
          <LoginPage />
        </AuthNullRoute>
      ),
    },
    {
      path: "/authentication/register",
      element: (
        <AuthNullRoute>
          <RegisterPage />
        </AuthNullRoute>
      ),
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
      path: "/details/:idShow",
      element: (
        <ProtectedRoute>
          <ShowDetailsPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/error/pageNotFound",
      element: <PageNotFound />,
    },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Navigate to="/home" />
        </ProtectedRoute>
      ),
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

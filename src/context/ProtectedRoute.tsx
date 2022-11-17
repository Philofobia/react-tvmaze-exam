import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./AuthContext";
interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { currentUser } = useContext(UserContext);

  if (currentUser === undefined) return <>Loading...</>;
  else if (currentUser === null) return <Navigate to="/authentication/login" />;
  else {
    return <>{children}</>;
  }
};

export default ProtectedRoute;

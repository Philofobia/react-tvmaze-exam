import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./AuthContext";
interface AuthNullRouteProps {
  children: React.ReactNode;
}

const AuthNullRoute = ({ children }: AuthNullRouteProps) => {
  const { currentUser } = useContext(UserContext);

  if (currentUser === undefined) return <>Loading...</>;
  else if (currentUser !== null) return <Navigate to="/home" />;
  else {
    return <>{children}</>;
  }
};

export default AuthNullRoute;

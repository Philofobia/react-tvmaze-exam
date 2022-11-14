import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: React.ReactNode;
  }

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const user: string = JSON.parse(localStorage.getItem('user') || "null");

  return user ? (
    <>{children}</>
  ) : (
    <Navigate to="/authentication/login" replace />
  );
};

export default ProtectedRoute
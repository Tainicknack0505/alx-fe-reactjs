import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";

function ProtectedRoute({ element: Element, ...rest }) {
  const isAuthenticated = useAuth();

  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
}

export default ProtectedRoute;

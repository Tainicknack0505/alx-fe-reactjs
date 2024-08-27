import { Navigate } from "react-router-dom";

function ProtectedRoute({ element: Element, isAuthenticated, ...rest }) {
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
}

export default ProtectedRoute;

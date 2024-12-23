import { useSelector } from "react-redux";
import { Navigate, useLocation, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const auth = useSelector((state) => state.auth);
  const location = useLocation();

  if (!auth || !auth.isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;

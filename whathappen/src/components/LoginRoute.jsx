import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const LoginRoute = () => {
  const auth = useSelector((state) => state.auth);
  const location = useLocation();

  if (auth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default LoginRoute;

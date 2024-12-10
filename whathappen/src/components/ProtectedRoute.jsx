import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function ProtectedRoute({ children }) {
  const auth = useSelector((state) => state.auth);
  const location = useLocation();

  console.log("Protected Route Auth State:", auth);

  if (!auth || !auth.isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;

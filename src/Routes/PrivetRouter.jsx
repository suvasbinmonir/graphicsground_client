import { useContext } from "react";
import { AuthContext } from "../provider/authProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-[100px] mx-auto">
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/log-in" state={{ from: location }} replace></Navigate>;
};

export default PrivetRouter;

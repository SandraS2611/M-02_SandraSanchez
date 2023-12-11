import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

export const PrivateRoutes = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth === null) {
      navigate("/login"); //login
    }
  }, [auth, navigate]);

  if (auth === undefined) return <div>Loading...</div>;

  return <Outlet />;
};

import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterForm } from "./RegisterForm"; 
import { LoginForm } from "./LoginForm"; 
import { NotFoundPage } from "../pages/404Page";
import { PrivateRoutes } from "./PrivateRoutes";


export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

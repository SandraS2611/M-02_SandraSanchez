import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { RegisterForm } from "./components/RegisterForm";
import { NotFoundPage } from "./pages/404Page";
// import { Perfil } from "./Pages/Perfil";
import { HomePage } from "./Pages/HomePage";
import { Login } from "./Pages/Login";
import { Perfil } from "./Pages/Perfil";
import { Posts } from "./Pages/Posts";




export const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

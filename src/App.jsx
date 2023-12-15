import { Route, Routes } from "react-router-dom";
import { Navbar } from "./FrontEnd/src/components/Navbar";
import { RegisterForm } from "./FrontEnd/src/components/RegisterForm";
import { NotFoundPage } from "./FrontEnd/src/pages/404Page";
import { HomePage } from "./FrontEnd/src/Pages/HomePage";
import { Login } from "./FrontEnd/src/Pages/Login";
import { Posts } from "./FrontEnd/src/Pages/Posts";
import { Profile } from "./FrontEnd/src/Pages/Profile";






export const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

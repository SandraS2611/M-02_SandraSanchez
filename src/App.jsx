import { HomePage } from "./Pages/HomePage";
import { Posts } from "./Pages/Posts";
import { NotFoundPage } from "./Pages/404Page";
import { Navbar } from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login";
import { RegisterForm } from "./Components/RegisterForm";
import { Profile } from "./Pages/Profile";

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

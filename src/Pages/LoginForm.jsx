import { useRef } from "react";
import { API_URL } from "../utils/consts";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const ref = useRef(null);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault;

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    const user = {
      email,
      password,
    };

    const req = await fetch(`${API_URL}/auht/login`, {
      method: "POST",
      headers: {
        "Content-Types": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (req.status !== 200) {
      ref.current.reset();
      return alert("Error al iniciar sesión");
    }

    const res = await req.jason();

    login(res);

    ref.current.reset();

navigate("/")
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit} ref={ref}>
        <input type="email" placeholder="my-email@email.com" name="email" />
        <input type="password" placeholder="********" name="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

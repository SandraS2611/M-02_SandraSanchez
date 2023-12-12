import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/consts";

export const RegisterForm = () => {
  const ref = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const avatar = formData.get("avatar");
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");

    const user = {
      //javascript no va a funcionar
      avatar,
      email,
      username,
      password,
    };

    const req = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Types": "application/json",
      },
    });

    if (req.status !== 201) return alert("Error al registar usuario");
    ref.current.reset();

    navigate("/login");
  };

  return (
    <div>
      <h2>New User</h2>
      <br />

      <form onSubmit={handleSubmit} ref={ref}>
        <input
          type="email"
          class="btn btn-outline-secondary"
          placeholder="my-email@email.com"
          name="email"
          required
        />
        <br />

        <input
          type="text"
          class="btn btn-outline-secondary"
          placeholder="User"
          name="username"
          required
        />
        <br />

        <input
          type="password"
          class="btn btn-outline-secondary"
          placeholder="********"
          name="password"
          required
        />
        <br />

        <a
          href="/profile"
          class="btn btn-lg btn btn-secondary "
          role="button"
          data-bs-toggle="button"
        >
          Register
        </a>
      </form>
    </div>
  );
};

import { useState } from "react";

export const Form2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
   e.preventDefault()
  }

  return (
    <>
      <h1 className="home">Welcome Travelers!!!</h1>
      <br />
      <div className="container-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control btn btn-outline-success"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="floatingInput">Email</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control btn btn-outline-success"
              id="floatingPassword"
              placeholder="Password"
              autocomplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label for="floatingPassword">********</label>
          </div>
          <br />
          
          <a
            href="/profile"
            className="btn btn-lg btn btn-outline-success"
            type="submit"
            role="button"
            data-bs-toggle="button"
          >
            Login
          </a>
        </div>
      </div>
    </>
  );
};

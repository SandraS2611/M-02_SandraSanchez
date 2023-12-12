export const Form2 = () => {
  return (
    <>
      <h1>Welcome Travelers!!!</h1>

      <div>
        <div class="form-group">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control btn btn-outline-success"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control btn btn-outline-success"
              id="floatingPassword"
              placeholder="Password"
              autocomplete="off"
            />
            <label for="floatingPassword">Contraseña</label>
          </div>
          <a
            href="/login" //perfil
            class="btn btn-lg btn btn-outline-success"
            role="button"
            data-bs-toggle="button"
          >
            Entrar
          </a>
        </div>
      </div>
    </>
  );
};

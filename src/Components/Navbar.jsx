export const Navbar = () => {
  return (
    // <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div class="container-fluid">
      <a class="marca-navbar">
      <img src="public/SS.png" alt="Sandra Sanchez" />
           </a>
        <a class="navbar-brand">Where we going today?</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" href="/">
              <p class="text-light">HomePage</p>
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/register">
              <p class="text-light">Register</p>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/posts">
              <p class="text-light">Posts</p>
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

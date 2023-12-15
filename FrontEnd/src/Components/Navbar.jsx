export const Navbar = () => {
  return (
    // <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
      <a className="marca-navbar">
      <img src="public/SS.png" alt="Sandra Sanchez" />
           </a>
        <a className="navbar-brand">Where we going today?</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">
              <p className="text-light">HomePage</p>
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register">
              <p className="text-light">Register</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/posts">
              <p className="text-light">Posts</p>
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

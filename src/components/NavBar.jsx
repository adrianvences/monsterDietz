import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5 ">
        <div className="container">
          <span className="navbar-brand"> <h1>MONSTER <span className="text-danger">Dietz</span></h1></span>
          {/* <span className="navbar-brand"> <img src="images/logo.png" alt="" /> </span> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/recipes">
                  Recipe look up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pets/new">
                  Recipe list 
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

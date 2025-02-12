import { NavLink } from "react-router-dom";
import CartStatus from "./CartStatus";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <h3 className="text-danger m-0 bg-danger-subtle rounded rounded-pill px-4">
              T-<span className="text-dark-emphasis fs-3">Store</span>
            </h3>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex align-items-center ms-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link active fs-4 fw-medium pe-4"
                  aria-current="page"
                  to="/"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  <button className="btn btn-danger btn-sm fs-6 fw-bold px-3 py-2">
                    CART <CartStatus />
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

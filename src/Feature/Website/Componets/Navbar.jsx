import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const redirect = useNavigate();
  
  const userlogout = () => {
    localStorage.removeItem("Sid");
    localStorage.removeItem("Sname");
    toast.success("Logout Success");
    redirect("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
        <a href className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <i className="fa fa-utensils me-3" />
            Restoran
          </h1>
          {/* <img src="img/logo.png" alt="Logo"> */}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 pe-4">
            <NavLink to="/" className="nav-item nav-link active">
              Home
            </NavLink>
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/service" className="nav-item nav-link">
              Service
            </Link>
            <Link to="/menu" className="nav-item nav-link">
              Menu
            </Link>
            <div className="nav-item dropdown">
              <Link
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </Link>
              <div className="dropdown-menu m-0">
                <a href="booking.html" className="dropdown-item">
                  Booking
                </a>
                <a href="team.html" className="dropdown-item">
                  Our Team
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
              </div>
            </div>
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          {(() => {
            if (localStorage.getItem("Sid")) {
              return (
                <>
                  <NavLink to="/user_profile">
                    <button
                      type="button"
                      class="btn btn-primary py-2 px-3 me-2"
                      >
                      <i class="fa-regular fa-user me-2"></i>
                      {localStorage.getItem("Sname")}
                    </button>
                  </NavLink>
                  <a href="javascript:void(0)" onClick={userlogout}>
                    <button
                      type="button"
                      class="btn btn-primary py-2 px-3 me-2"
                    >
                      <i class="fa-solid fa-right-from-bracket me-2"></i>
                      Logout
                    </button>
                  </a>
                </>
              );
            } else {
              return (
                <>
                  <Link to="/sign_up">
                    <button className="btn btn-primary py-2 px-3 me-2">
                    <i class="fa-regular fa-user me-1"></i> Sign Up
                    </button>
                  </Link>
                  <Link to="/login">
                    <button to="/login" className="btn btn-primary py-2 px-3">
                      <i class="fa-solid fa-user-lock me-1"></i> Login
                    </button>
                  </Link>
                </>
              );
            }
          })()}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

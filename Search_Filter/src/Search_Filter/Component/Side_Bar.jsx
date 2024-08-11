import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Drop_down.css";

function Side_Bar() {
  return (
    <div className="sidebar pe-4 pb-3">
      <nav className="navbar bg-light navbar-light">
        <Link to="/" className="navbar-brand mx-4 mb-3">
          <h3 className="text-primary">
            <i className="fa fa-hashtag me-2" />
            DASHMIN
          </h3>
        </Link>
        <div className="navbar-nav w-100">
          <Link to="/" className="nav-item nav-link active">
            <i className="fa fa-tachometer-alt me-2" />
            Dashboard
          </Link>
          <div class="dropdown">
            <input type="checkbox" id="dropdown-toggle" />
            <label for="dropdown-toggle" class="dropdown-label">
              <i className="fa fa-laptop me-2" style={{ marginLeft: "10px" }} />{" "}
              Categories
              <i
                class="fa-solid fa-chevron-down"
                style={{ paddingLeft: "40px", fontSize: "14px" }}
              ></i>
            </label>
            <div class="dropdown-content bg-transparent border-0  dropdown-menu">
              <Link to="/manage_category" className="dropdown-item">
                Manage Category
              </Link>
            </div>
          </div>
          <div class="dropdown-new">
            <input type="checkbox" id="dropdown-new-toggle" />
            <label for="dropdown-new-toggle" class="dropdown-new-label">
              <i className="fa fa-laptop me-2" style={{ marginLeft: "10px" }} />{" "}
              Products
              <i
                class="fa-solid fa-chevron-down"
                style={{ paddingLeft: "40px", fontSize: "14px" }}
              ></i>
            </label>
            <div class="dropdown-new-content bg-transparent border-0 dropdown-menu">
              <Link to="/manage_product" className="dropdown-item">
                Manage Product
              </Link>
            </div>
          </div>
          <Link to="/manage_contacts" className="nav-item nav-link">
            <i className="fa fa-th me-2" />
            Contacts
          </Link>
          <Link to="/Manage_User" className="nav-item nav-link">
            <i className="fa fa-table me-2" />
            Manage User
          </Link>
        </div>
      </nav>
      <Helmet>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        <script src="/admin/js/main.js"></script>
      </Helmet>
      <Helmet>
        <link href="/admin/css/bootstrap.min.css" rel="stylesheet" />
      </Helmet>
    </div>
  );
}

export default Side_Bar;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
        <Link to="/" className="navbar-brand d-flex d-lg-none me-4">
          <h2 className="text-primary mb-0">
            <i className="fa fa-hashtag" />
          </h2>
        </Link>
        <a href="javascript:void(0)" className="sidebar-toggler flex-shrink-0">
          <i className="fa fa-bars" />
        </a>
      </nav>
    </>
  );
}

export default Header;

import React from "react";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";
import { Link } from "react-router-dom";

function PNF() {
  return (
    <div className='class="container-xxl bg-white p-0"'>
      <div class="container-xxl position-relative p-0">
        <Navbar />

        <div class="container-xxl py-5 bg-dark hero-header mb-5">
          <div class="container text-center my-5 pt-~5 pb-4">
            <h1 class="display-3 text-white mb-3 animated slideInDown">
              404 Error
            </h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center text-uppercase">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li
                  class="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Contact
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div class="container mt-3">
        <div class="row">
          <div class="col-sm-12" style={{ textAlign: "center" }}>
            <h1>Page Not Found </h1>
            <p className="mt-3" style={{fontSize:'20px'}}>
              We’re sorry, the page you have looked for does not exist in our
              website! <br /> Maybe go to our home page or try to use a search?
            </p>
            <div
              class="spinner-border"
              style={{ color: "#FEA116" }}
            ></div>{" "}
            <br />
            <Link
              to="/"
              type="submit"
              className="btn custom-btn  mt-4 mb-3"
              style={{
                backgroundColor: "#FEA116",
                color: "white",
              }}
            >
              Back
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PNF;

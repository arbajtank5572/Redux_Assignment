import React, { useEffect, useState } from "react";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";
import { useDispatch, useSelector } from "react-redux";
import { get_user } from "./UserSlice";
import { useNavigate } from "react-router-dom";

function User_Profile() {
  const redirect = useNavigate();

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_user());
  });

  return (
    <div class="container-xxl bg-white p-0">
      <div class="container-xxl position-relative p-0">
        <Navbar />

        <div class="container-xxl py-5 bg-dark hero-header mb-5">
          <div class="container text-center my-5 pt-~5 pb-4">
            <h1 class="display-3 text-white mb-3 animated slideInDown">
              My Profile
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

      <section className="gift_section layout_padding-bottom mt-5">
        <div className="container mt-5">
          <div className="heading_container heading_center">
            <h2>My Profile</h2>
          </div>
          <div className="main-body">
            {/* /Breadcrumb */}
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src={user.image}
                        alt="Admin"
                        width={240}
                        // style={{ borderRadius: "10px" }}
                      />
                      <div className="mt-3">
                        <h4>{user.name}</h4>
                        <p className="text-secondary mb-1">{user.id}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="row pb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">ID</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">{user.id}</div>
                    </div>
                    <hr />
                    <div className="row  pb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Full Name</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">{user.name}</div>
                    </div>
                    <hr />
                    <div className="row pb-3">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {user.email}
                      </div>
                    </div>
                    <hr />
                    <div className="row pb-2">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Mobile</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        {user.number}
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-12">
                        <button
                          className="btn btn-primary px-4 me-4"
                          onClick={() => redirect("/")}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => redirect("/edit_profile/" + user.id)}
                        >
                          Edit Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default User_Profile;

import React, { useState } from "react";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, NavLink } from "react-router-dom";
import { insert_user } from "./UserSlice";

function Sign_up() {
  const dispatch = useDispatch();

  const redirect = useNavigate();
  const [mydata, setdata] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    number: "",
    image: "",
    status: "Unblock",
  });

  function validation() {
    var ans = true;
    if (mydata.name === "") {
      toast.error("Please name Required");
      ans = true;
      return false;
    }
    if (mydata.email === "") {
      toast.error("Please email Required");
      ans = true;
      return false;
    }
    if (mydata.number === "") {
      toast.error("Please number Required");
      ans = true;
      return false;
    }
    if (mydata.password === "") {
      toast.error("Please password Required");
      ans = true;
      return false;
    }

    if (mydata.image === "") {
      toast.error("Please Image Required");
      ans = true;
      return false;
    }
    return ans;
  }
  const ChangeHandel = (e) => {
    setdata({
      ...mydata,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(mydata.data);
  };
  const SubmitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
      dispatch(insert_user(mydata));
      toast.success("Sign up succesfully ");
      setdata({
        ...mydata,
        id: "",
        name: "",
        email: "",
        password: "",
        number: "",
        image: "",
      });
      redirect("/login");
    }
  };

  return (
    <div class="container-xxl bg-white p-0">
      <div class="container-xxl position-relative p-0">
        <Navbar />

        <div class="container-xxl py-5 bg-dark hero-header mb-5">
          <div class="container text-center my-5 pt-5 pb-4">
            <h1 class="display-3 text-white mb-3 animated slideInDown">
              Sign_Up Here
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
                  Menu
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <main>
            <section className="sign-in-form section-padding">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto col-12">
                    <h1 className="hero-title text-center mb-5">Sign_Up</h1>
                    <div className="row">
                      <div className="col-lg-8 col-11 mx-auto">
                        <form
                          role="form"
                          method="post"
                          onSubmit={SubmitHandel}
                          onChange={ChangeHandel}
                        >
                          <div className="form-floating">
                            <input
                              type="name"
                              name="name"
                              id="name"
                              value={mydata.name}
                              className="form-control"
                              placeholder="Username"
                            />
                            <label htmlFor="name">Username</label>
                          </div>
                          <div className="form-floating my-4">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              value={mydata.email}
                              className="form-control"
                              placeholder="Email address"
                            />
                            <label htmlFor="email">Email address</label>
                          </div>
                          <div className="form-floating my-4">
                            <input
                              type="password"
                              name="password"
                              id="password"
                              value={mydata.password}
                              className="form-control"
                              placeholder="Password"
                            />
                            <label htmlFor="password">Password</label>
                            <p className="text-center"></p>
                          </div>
                          <div className="form-floating my-4">
                            <input
                              type="number"
                              name="number"
                              id="number"
                              value={mydata.number}
                              className="form-control"
                              placeholder="Mobile Number"
                            />
                            <label htmlFor="Mobile Number">Mobile Number</label>
                          </div>
                          <div className="form-floating">
                            <input
                              type="url"
                              name="image"
                              id="image"
                              value={mydata.image}
                              className="form-control"
                              placeholder="Image"
                            />
                            <label htmlFor="image">Image</label>
                          </div>
                          <button
                            type="submit"
                            className="btn form-control mt-4 mb-3"
                            style={{
                              backgroundColor: "#FEA116",
                              color: "white",
                            }}
                          >
                            Create account
                          </button>
                          <p className="text-center">
                            Already have an account? Please{" "}
                            <Link to="/login">Sign In</Link>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sign_up;

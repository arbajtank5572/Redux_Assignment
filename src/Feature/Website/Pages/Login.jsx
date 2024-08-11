import React, { useState } from "react";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function Login() {

  const dispatch = useDispatch(); 
  const redirect = useNavigate();
  const [mydata, setdata] = useState({
    name: "",
    number: "",
    password: "",
    image: "",
    email: "",
  });
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
    const result = await axios.get(
      `http://localhost:3000/Users?email=${mydata.email}`
    );
    if (result.data.length > 0) {
      if (result.data[0].password == mydata.password) {
        if (result.data[0].status == "Unblock") {
          localStorage.setItem("Sid", result.data[0].id);
          localStorage.setItem("Sname", result.data[0].name);
          toast.success("Login Success !!");
          return redirect("/");
        } else {
          toast.error("Your Account Blocked Contact Shion Shop !!");
          setdata({ email: "", password: "" });
          return false;
        }
      } else {
        toast.error("Password does not match !!");
        setdata({ ...mydata, email: "", password: "" });
        return false;
      }
    } else {
      toast.error("Email does not Exist !!");
      setdata({ ...mydata, email: "", password: "" });
      return false;
    }
    toast.success("Data Add Success ");
    setdata({
      ...mydata,
      name: "",
      image: "",
      number: "",
      password: "",
      email: "",
    });
    redirect("/login");
  };

  return (
    <div class="container-xxl bg-white p-0">
      <div class="container-xxl position-relative p-0">
        <Navbar />

        <div class="container-xxl py-5 bg-dark hero-header mb-5">
          <div class="container text-center my-5 pt-5 pb-4">
            <h1 class="display-3 text-white mb-3 animated slideInDown">
              Login Here
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
                    <h1 className="hero-title text-center mb-5">Sign_In</h1>
                    <div className="row">
                      <div className="col-lg-8 col-11 mx-auto">
                        <form
                          role="form"
                          method="post"
                          onChange={ChangeHandel}
                          onSubmit={SubmitHandel}
                        >
                          <div className="form-floating mb-4 p-0">
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
                          <div className="form-floating p-0">
                            <input
                              type="password"
                              name="password"
                              id="password"
                              value={mydata.password}
                              className="form-control"
                              placeholder="Password"
                            />
                            <label htmlFor="password">Password</label>
                          </div>
                          <button
                            type="submit"
                            className="btn custom-btn form-control mt-4 mb-3"
                            style={{backgroundColor:"#FEA116" , color:"white"}}
                          >
                            Sign in
                          </button>
                          <p className="text-center">
                            Don’t have an account?{" "}
                            <Link to="/sign_up">Create One</Link>
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

export default Login;

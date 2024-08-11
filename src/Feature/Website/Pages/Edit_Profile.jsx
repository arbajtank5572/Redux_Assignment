import React, { useEffect, useState } from "react";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Edit_Profile() {
  const redirect = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("Sid")) {
      editdata();
    } else {
      redirect("/");
    }
  }, []);

  const [mydata, setdata] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    number: "",
    image: "",
  });

  const { id } = useParams();

  const editdata = async () => {
    const res = await axios.get(`http://localhost:3000/Users/${id}`);
    console.log(res.data);
    setdata(res.data);
  };

  const changeHandel = async (e) => {
    setdata({ ...mydata, [e.target.name]: e.target.value });
    console.log(mydata);
  };

  function validation() {
    var ans = true;

    if (mydata.name == "") {
      toast.error("Name Field is required");
      ans = false;
      return false;
    }

    if (mydata.email == "") {
      toast.error("Email Field is required");
      ans = false;
      return false;
    }

    if (mydata.password == "") {
      toast.error("Password Field is required");
      ans = false;
      return false;
    }

    if (mydata.number == "") {
      toast.error("Mobile Number Field is required");
      ans = false;
      return false;
    }

    if (mydata.image == "") {
      toast.error("Image Field is required");
      ans = false;
      return false;
    }
    return ans;
  }

  const submitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.patch(
        `http://localhost:3000/Users/${id}`,
        mydata
      );
      console.log(res);
      if (res.status == 200) {
        setdata({
          ...mydata,
          id: "",
          name: "",
          email: "",
          password: "",
          number: "",
          img: "",
        });
        redirect("/user_profile");
        toast.success("Data Update Success");
      }
    }
  };

  return (
    <div class="container-xxl bg-white p-0">
      <div class="container-xxl position-relative p-0">
        <Navbar />

        <div class="container-xxl py-5 bg-dark hero-header mb-5">
          <div class="container text-center my-5 pt-~5 pb-4">
            <h1 class="display-3 text-white mb-3 animated slideInDown">
              Edit Profile
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

      <div className="container-xxl py-5">
        <div className="container">
          <main>
            <section className="sign-in-form section-padding">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto col-12">
                    <h1 className="hero-title text-center mb-5">Edit_Profile</h1>
                    <div className="row">
                      <div className="col-lg-8 col-11 mx-auto">
                        <form
                          role="form"
                          method="post"
                          onSubmit={submitHandel}
                          onChange={changeHandel}
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
                            className="btn custom-btn form-control mt-4 mb-3"
                            style={{
                              backgroundColor: "#FEA116",
                              color: "white",
                            }}
                          >
                            Save
                          </button>
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

export default Edit_Profile;

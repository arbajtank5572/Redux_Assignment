import React from "react";
import { Helmet } from "react-helmet";

function Admin_Login() {
  return (
    <div>
        <Helmet>
        <link rel="shortcut icon" href="/admin/images/favicon.ico" />
        <link rel="stylesheet" href="/admin/css/backend-plugin.min.css" />
        <link rel="stylesheet" href="/admin/css/backend.css?v=1.0.0" />
        <link
          rel="stylesheet"
          href="/admin/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="/admin/vendor/remixicon/fonts/remixicon.css"
        />

        <link
          rel="stylesheet"
          href="/admin/vendor/tui-calendar/tui-calendar/dist/tui-calendar.css"
        />
        <link
          rel="stylesheet"
          href="/admin/vendor/tui-calendar/tui-date-picker/dist/tui-date-picker.css"
        />
        <link
          rel="stylesheet"
          href="/admin/vendor/tui-calendar/tui-time-picker/dist/tui-time-picker.css"
        />
      </Helmet>
      <div className="wrapper">
        <section className="login-content">
          <div className="container">
            <div className="row align-items-center justify-content-center height-self-center">
              <div className="col-lg-8">
                <div className="card auth-card">
                  <div className="card-body p-0">
                    <div className="d-flex align-items-center auth-content">
                      <div className="col-lg-6 bg-primary content-left">
                        <div className="p-3">
                          <h2 className="mb-2 text-white">Sign In</h2>
                          <p>Login to stay connected.</p>
                          <form>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="floating-label form-group">
                                  <input
                                    className="floating-input form-control"
                                    type="email"
                                    placeholder=" "
                                  />
                                  <label>Email</label>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="floating-label form-group">
                                  <input
                                    className="floating-input form-control"
                                    type="password"
                                    placeholder=" "
                                  />
                                  <label>Password</label>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="custom-control custom-checkbox mb-3">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    className="custom-control-label control-label-1 text-white"
                                    htmlFor="customCheck1"
                                  >
                                    Remember Me
                                  </label>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <a
                                  href="auth-recoverpw.html"
                                  className="text-white float-right"
                                >
                                  Forgot Password?
                                </a>
                              </div>
                            </div>
                            <button type="submit" className="btn btn-white">
                              Sign In
                            </button>
                            <p className="mt-3">
                              Create an Account{" "}
                              <a
                                href="auth-sign-up.html"
                                className="text-white text-underline"
                              >
                                Sign Up
                              </a>
                            </p>
                          </form>
                        </div>
                      </div>
                      <div className="col-lg-6 content-right">
                        <img
                          src="admin/images/login/01.png"
                          className="img-fluid image-right"
                          alt
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Admin_Login;

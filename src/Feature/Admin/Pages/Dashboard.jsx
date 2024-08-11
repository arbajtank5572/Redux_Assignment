import React from "react";
import Sidebar from "../Componets/Sidebar";
import Header from "../Componets/Header";
import { Helmet } from "react-helmet";

function Dashboard() {
  return (
    <>
      <Helmet>
        <script src="../admin/js/backend-bundle.min.js"></script>
        <script src="../admin/js/table-treeview.js"></script>
        <script src="../admin/js/customizer.js"></script>
        <script async src="../admin/js/chart-custom.js"></script>
        <script async src="../admin/js/slider.js"></script>
        <script src="../admin/js/app.js"></script>
        <script src="../admin/vendor/moment.min.js"></script>

        {/* <!-- Bootstrap_5_CDN --> */}

        {/* <!-- Latest compiled and minified CSS --> */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        {/* <!-- Latest compiled JavaScript --> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      </Helmet>
      
      <div class="wrapper">
        <Sidebar />
        <Header />

        <div className="content-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="card card-block card-stretch card-height">
                  <div className="card-body">
                    <div className="top-block d-flex align-items-center justify-content-between">
                      <h5>Investment</h5>
                      <span className="badge badge-primary">Monthly</span>
                    </div>
                    <h3>
                      $<span className="counter">35000</span>
                    </h3>
                    <div className="d-flex align-items-center justify-content-between mt-1">
                      <p className="mb-0">Total Revenue</p>
                      <span className="text-primary">65%</span>
                    </div>
                    <div
                      class="progress mt-2"
                      style={{ width: "33vh", height: "8px" }}
                    >
                      <div
                        class="progress-bar progress-bar-striped progress-bar-animated"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card card-block card-stretch card-height">
                  <div className="card-body">
                    <div className="top-block d-flex align-items-center justify-content-between">
                      <h5>Sales</h5>
                      <span className="badge badge-warning">Anual</span>
                    </div>
                    <h3>
                      $<span className="counter">25100</span>
                    </h3>
                    <div className="d-flex align-items-center justify-content-between mt-1">
                      <p className="mb-0">Total Revenue</p>
                      <span className="text-warning">35%</span>
                    </div>
                    <div
                      class="progress mt-2"
                      style={{ width: "33vh", height: "8px" }}
                    >
                      <div
                        class="progress-bar progress-bar-striped progress-bar-animated"
                        style={{ width: "35%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card card-block card-stretch card-height">
                  <div className="card-body">
                    <div className="top-block d-flex align-items-center justify-content-between">
                      <h5>Cost</h5>
                      <span className="badge badge-success">Today</span>
                    </div>
                    <h3>
                      $<span className="counter">33000</span>
                    </h3>
                    <div className="d-flex align-items-center justify-content-between mt-1">
                      <p className="mb-0">Total Revenue</p>
                      <span className="text-success">85%</span>
                    </div>
                    <div
                      class="progress mt-2"
                      style={{ width: "33vh", height: "8px" }}
                    >
                      <div
                        class="progress-bar progress-bar-striped progress-bar-animated"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card card-block card-stretch card-height">
                  <div className="card-body">
                    <div className="top-block d-flex align-items-center justify-content-between">
                      <h5>Profit</h5>
                      <span className="badge badge-info">Weekly</span>
                    </div>
                    <h3>
                      $<span className="counter">2500</span>
                    </h3>
                    <div className="d-flex align-items-center justify-content-between mt-1">
                      <p className="mb-0">Total Revenue</p>
                      <span className="text-info">55%</span>
                    </div>
                    <div
                      class="progress mt-2"
                      style={{ width: "33vh", height: "8px" }}
                    >
                      <div
                        class="progress-bar progress-bar-striped progress-bar-animated"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="card-transparent card-block card-stretch card-height">
                  <div className="card-body p-0">
                    <div className="card">
                      <div className="card-header d-flex justify-content-between">
                        <div className="header-title">
                          <h4 className="card-title">Overview Progress</h4>
                        </div>
                      </div>
                      <div className="card-body">
                        <ul className="list-inline p-0 mb-0">
                          <li className="mb-1">
                            <div className="row">
                              <div className="col-sm-3">
                                <p className="mb-0">UX / UI Design</p>
                              </div>
                              <div className="col-sm-6">
                                <div className="d-flex align-items-center justify-content-between">
                                  <div
                                    class="progress mt-2"
                                    style={{ width: "42vh", height: "8px" }}
                                  >
                                    <div
                                      class="progress-bar progress-bar-striped progress-bar-animated"
                                      style={{ width: "65%" }}
                                    ></div>
                                  </div>
                                  <span className="ml-3">65%</span>
                                </div>
                              </div>
                              <div className="col-sm-3">
                                <div className="iq-media-group text-sm-right">
                                  <a href="#" className="iq-media">
                                    <img
                                      className="img-fluid avatar-40 rounded-circle"
                                      src="admin/images/user/05.jpg"
                                      alt
                                    />
                                  </a>
                                  <a href="#" className="iq-media">
                                    <img
                                      className="img-fluid avatar-40 rounded-circle"
                                      src="admin/images/user/06.jpg"
                                      alt
                                    />
                                  </a>
                                  <a href="#" className="iq-media">
                                    <img
                                      className="img-fluid avatar-40 rounded-circle"
                                      src="admin/images/user/07.jpg"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="mb-1">
                            <div className="d-flex align-items-center justify-content-between row">
                              <div className="col-sm-3">
                                <p className="mb-0">Development</p>
                              </div>
                              <div className="col-sm-6">
                                <div className="d-flex align-items-center justify-content-between">
                                  <div
                                    class="progress mt-2"
                                    style={{ width: "42vh", height: "8px" }}
                                  >
                                    <div
                                      class="progress-bar progress-bar-striped progress-bar-animated"
                                      style={{ width: "59%" }}
                                    ></div>
                                  </div>
                                  <span className="ml-3">59%</span>
                                </div>
                              </div>
                              <div className="col-sm-3">
                                <div className="iq-media-group text-sm-right">
                                  <a href="#" className="iq-media">
                                    <img
                                      className="img-fluid avatar-40 rounded-circle"
                                      src="admin/images/user/08.jpg"
                                      alt
                                    />
                                  </a>
                                  <a href="#" className="iq-media">
                                    <img
                                      className="img-fluid avatar-40 rounded-circle"
                                      src="admin/images/user/09.jpg"
                                      alt
                                    />
                                  </a>
                                  <a href="#" className="iq-media">
                                    <img
                                      className="img-fluid avatar-40 rounded-circle"
                                      src="admin/images/user/04.jpg"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex align-items-center justify-content-between row">
                              <div className="col-sm-3">
                                <p className="mb-0">Testing</p>
                              </div>
                              <div className="col-sm-6">
                                <div className="d-flex align-items-center justify-content-between">
                                  <div
                                    class="progress mt-2"
                                    style={{ width: "42vh", height: "8px" }}
                                  >
                                    <div
                                      class="progress-bar progress-bar-striped progress-bar-animated"
                                      style={{ width: "78%" }}
                                    ></div>
                                  </div>
                                  <span className="ml-3">78%</span>
                                </div>
                              </div>
                              <div className="col-sm-3">
                                <div className="iq-media-group text-sm-right">
                                  <a href="#" className="iq-media">
                                    <img
                                      className="img-fluid avatar-40 rounded-circle"
                                      src="admin/images/user/01.jpg"
                                      alt
                                    />
                                  </a>
                                  <a href="#" className="iq-media">
                                    <img
                                      className="img-fluid avatar-40 rounded-circle"
                                      src="admin/images/user/02.jpg"
                                      alt
                                    />
                                  </a>
                                  <a href="#" className="iq-media">
                                    <img
                                      className="img-fluid avatar-40 rounded-circle"
                                      src="admin/images/user/03.jpg"
                                      alt
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-sm-8">
                                <div className="row align-items-center">
                                  <div className="col-md-3">
                                    <div
                                      id="circle-progress-21"
                                      className="circle-progress-01 circle-progress circle-progress-primary"
                                      data-min-value={0}
                                      data-max-value={100}
                                      data-value={25}
                                      data-type="percent"
                                    />
                                  </div>
                                  <div className="col-md-9">
                                    <div className="mt-3 mt-md-0">
                                      <h5 className="mb-1">
                                        Cloud Service Theme
                                      </h5>
                                      <p className="mb-0">
                                        Exclusively for cloud-based/ Startup
                                        theme.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-4 text-sm-right mt-3 mt-sm-0">
                                <div className="iq-media-group">
                                  <a href="#" className="iq-media">
                                    <img
                                      className="img-fluid avatar-40 rounded-circle"
                                      src="admin/images/user/05.jpg"
                                      alt
                                    />
                                  </a>
                                  <a href="#" className="iq-media">
                                    <img
                                      className="img-fluid avatar-40 rounded-circle"
                                      src="admin/images/user/06.jpg"
                                      alt
                                    />
                                  </a>
                                </div>
                                <a className="btn btn-white text-primary link-shadow mt-2">
                                  High
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-sm-8">
                                <div className="row align-items-center">
                                  <div className="col-md-3">
                                    <div
                                      id="circle-progress-22"
                                      className="circle-progress-01 circle-progress circle-progress-secondary"
                                      data-min-value={0}
                                      data-max-value={100}
                                      data-value={30}
                                      data-type="percent"
                                    />
                                  </div>
                                  <div className="col-md-9">
                                    <div className="mt-3 mt-md-0">
                                      <h5 className="mb-1">
                                        Automotive WordPress
                                      </h5>
                                      <p className="mb-0">
                                        Dealership-based business WordPress
                                        theme.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-4 text-sm-right mt-3 mt-sm-0">
                                <div className="iq-media-group">
                                  <a href="#" className="iq-media">
                                    <img
                                      className="img-fluid avatar-40 rounded-circle"
                                      src="admin/images/user/07.jpg"
                                      alt
                                    />
                                  </a>
                                  <a href="#" className="iq-media">
                                    <img
                                      className="img-fluid avatar-40 rounded-circle"
                                      src="admin/images/user/02.jpg"
                                      alt
                                    />
                                  </a>
                                  <a href="#" className="iq-media">
                                    <img
                                      className="img-fluid avatar-40 rounded-circle"
                                      src="admin/images/user/04.jpg"
                                      alt
                                    />
                                  </a>
                                  <a href="#" className="iq-media">
                                    <img
                                      className="img-fluid avatar-40 rounded-circle"
                                      src="admin/images/user/08.jpg"
                                      alt
                                    />
                                  </a>
                                </div>
                                <a className="btn btn-white text-secondary link-shadow mt-2">
                                  Medium
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-sm-8">
                                <div className="row align-items-center">
                                  <div className="col-md-3">
                                    <div
                                      id="circle-progress-23"
                                      className="circle-progress-01 circle-progress circle-progress-warning"
                                      data-min-value={0}
                                      data-max-value={100}
                                      data-value={15}
                                      data-type="percent"
                                    />
                                  </div>
                                  <div className="col-md-9">
                                    <div className="mt-3 mt-md-0">
                                      <h5 className="mb-1">Online Education</h5>
                                      <p className="mb-0">
                                        Remote students and teachers dashboard.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-4 text-sm-right mt-3 mt-sm-0">
                                <div className="iq-media-group">
                                  <a href="#" className="iq-media">
                                    <img
                                      className="img-fluid avatar-40 rounded-circle"
                                      src="admin/images/user/01.jpg"
                                      alt
                                    />
                                  </a>
                                  <a href="#" className="iq-media">
                                    <img
                                      className="img-fluid avatar-40 rounded-circle"
                                      src="admin/images/user/02.jpg"
                                      alt
                                    />
                                  </a>
                                  <a href="#" className="iq-media">
                                    <img
                                      className="img-fluid avatar-40 rounded-circle"
                                      src="admin/images/user/03.jpg"
                                      alt
                                    />
                                  </a>
                                </div>
                                <a className="btn btn-white text-warning link-shadow mt-2">
                                  Low
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="card mb-0">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-sm-8">
                                <div className="row align-items-center">
                                  <div className="col-md-3">
                                    <div
                                      id="circle-progress-24"
                                      className="circle-progress-01 circle-progress circle-progress-success"
                                      data-min-value={0}
                                      data-max-value={100}
                                      data-value={40}
                                      data-type="percent"
                                    />
                                  </div>
                                  <div className="col-md-9">
                                    <div className="mt-3 mt-md-0">
                                      <h5 className="mb-1">
                                        Blog/Magazine Theme
                                      </h5>
                                      <p className="mb-0">
                                        Launch visually appealing Blog theme.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-4 text-sm-right mt-3 mt-sm-0">
                                <div className="iq-media-group">
                                  <a href="#" className="iq-media">
                                    <img
                                      className="img-fluid avatar-40 rounded-circle"
                                      src="admin/images/user/05.jpg"
                                      alt
                                    />
                                  </a>
                                  <a href="#" className="iq-media">
                                    <img
                                      className="img-fluid avatar-40 rounded-circle"
                                      src="admin/images/user/06.jpg"
                                      alt
                                    />
                                  </a>
                                  <a href="#" className="iq-media">
                                    <img
                                      className="img-fluid avatar-40 rounded-circle"
                                      src="admin/images/user/07.jpg"
                                      alt
                                    />
                                  </a>
                                </div>
                                <a className="btn btn-white text-success  link-shadow mt-2">
                                  High
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-xl-4">
                <div className="card card-block card-stretch card-height">
                  <div className="card-body">
                    <div className="card border-bottom pb-2 shadow-none">
                      <div className="card-body text-center inln-date flet-datepickr">
                        <input
                          type="text"
                          id="inline-date"
                          className="date-input basicFlatpickr d-none"
                          readOnly="readonly"
                        />
                      </div>
                    </div>
                    <div className="card card-list">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <svg
                            className="svg-icon text-secondary mr-3"
                            width={24}
                            height={24}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          </svg>
                          <div className="pl-3 border-left">
                            <h5 className="mb-1">Direct Development</h5>
                            <p className="mb-0">Unveling the design system</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card card-list">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <svg
                            className="svg-icon text-primary mr-3"
                            width={24}
                            height={24}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                            <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                          </svg>
                          <div className="pl-3 border-left">
                            <h5 className="mb-1">action point assigned</h5>
                            <p className="mb-0">Unveling the design system</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card card-list">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <svg
                            className="svg-icon text-warning mr-3"
                            width={24}
                            height={24}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                          </svg>
                          <div className="pl-3 border-left">
                            <h5 className="mb-1">Private Notes</h5>
                            <p className="mb-0">Unveling the design system</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card card-list mb-0">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <svg
                            className="svg-icon text-success mr-3"
                            width={24}
                            height={24}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                          <div className="pl-3 border-left">
                            <h5 className="mb-1">Support Request</h5>
                            <p className="mb-0">Unveling the design system</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-12">
                <div className="card-transparent mb-0">
                  <div className="card-header d-flex align-items-center justify-content-between p-0 pb-3">
                    <div className="header-title">
                      <h4 className="card-title">Current Projects</h4>
                    </div>
                    <div className="card-header-toolbar d-flex align-items-center">
                      <div
                        id="top-project-slick-arrow"
                        className="slick-aerrow-block"
                      ></div>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <ul className="list-unstyled row top-projects mb-0">
                      <li className="col-lg-4">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="mb-3">
                              Hotel Management App UI Kit
                            </h5>
                            <p className="mb-3">
                              <i className="las la-calendar-check mr-2" />
                              02 / 02 / 2021
                            </p>
                            <div className="iq-progress-bar bg-secondary-light mb-4">
                              <span
                                className="bg-secondary iq-progress progress-1"
                                data-percent={65}
                                style={{
                                  transition: "width 2s ease 0s",
                                  width: "65%",
                                }}
                              />
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="iq-media-group">
                                <a href="#" className="iq-media">
                                  <img
                                    src="admin/images/user/01.jpg"
                                    className="img-fluid avatar-40 rounded-circle"
                                    alt
                                  />
                                </a>
                                <a href="#" className="iq-media">
                                  <img
                                    src="admin/images/user/02.jpg"
                                    className="img-fluid avatar-40 rounded-circle"
                                    alt
                                  />
                                </a>
                                <a href="#" className="iq-media">
                                  <img
                                    src="admin/images/user/03.jpg"
                                    className="img-fluid avatar-40 rounded-circle"
                                    alt
                                  />
                                </a>
                                <a href="#" className="iq-media">
                                  <img
                                    src="admin/images/user/04.jpg"
                                    className="img-fluid avatar-40 rounded-circle"
                                    alt
                                  />
                                </a>
                              </div>
                              <div>
                                <a href="#" className="btn bg-secondary-light">
                                  Design
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-lg-4">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="mb-3">
                              General Improvement in pages
                            </h5>
                            <p className="mb-3">
                              <i className="las la-calendar-check mr-2" />
                              02 / 02 / 2021
                            </p>
                            <div className="iq-progress-bar bg-info-light mb-4">
                              <span
                                className="bg-info iq-progress progress-1"
                                data-percent={65}
                                style={{
                                  transition: "width 2s ease 0s",
                                  width: "65%",
                                }}
                              />
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="iq-media-group">
                                <a href="#" className="iq-media">
                                  <img
                                    src="admin/images/user/05.jpg"
                                    className="img-fluid avatar-40 rounded-circle"
                                    alt
                                  />
                                </a>
                                <a href="#" className="iq-media">
                                  <img
                                    src="admin/images/user/06.jpg"
                                    className="img-fluid avatar-40 rounded-circle"
                                    alt
                                  />
                                </a>
                                <a href="#" className="iq-media">
                                  <img
                                    src="admin/images/user/07.jpg"
                                    className="img-fluid avatar-40 rounded-circle"
                                    alt
                                  />
                                </a>
                                <a href="#" className="iq-media">
                                  <img
                                    src="admin/images/user/08.jpg"
                                    className="img-fluid avatar-40 rounded-circle"
                                    alt
                                  />
                                </a>
                              </div>
                              <div>
                                <a href="#" className="btn bg-info-light">
                                  Testing
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-lg-4">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="mb-3">Product list view changes</h5>
                            <p className="mb-3">
                              <i className="las la-calendar-check mr-2" />
                              02 / 02 / 2021
                            </p>
                            <div className="iq-progress-bar bg-success-light mb-4">
                              <span
                                className="bg-success iq-progress progress-1"
                                data-percent={65}
                                style={{
                                  transition: "width 2s ease 0s",
                                  width: "65%",
                                }}
                              />
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="iq-media-group">
                                <a href="#" className="iq-media">
                                  <img
                                    src="admin/images/user/03.jpg"
                                    className="img-fluid avatar-40 rounded-circle"
                                    alt
                                  />
                                </a>
                                <a href="#" className="iq-media">
                                  <img
                                    src="admin/images/user/04.jpg"
                                    className="img-fluid avatar-40 rounded-circle"
                                    alt
                                  />
                                </a>
                                <a href="#" className="iq-media">
                                  <img
                                    src="admin/images/user/05.jpg"
                                    className="img-fluid avatar-40 rounded-circle"
                                    alt
                                  />
                                </a>
                                <a href="#" className="iq-media">
                                  <img
                                    src="admin/images/user/06.jpg"
                                    className="img-fluid avatar-40 rounded-circle"
                                    alt
                                  />
                                </a>
                              </div>
                              <div>
                                <a href="#" className="btn bg-success-light">
                                  SEO
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-lg-4">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="mb-3">Add Multiple theme options</h5>
                            <p className="mb-3">
                              <i className="las la-calendar-check mr-2" />
                              02 / 02 / 2021
                            </p>
                            <div className="iq-progress-bar bg-warning-light mb-4">
                              <span
                                className="bg-warning iq-progress progress-1"
                                data-percent={65}
                                style={{
                                  transition: "width 2s ease 0s",
                                  width: "65%",
                                }}
                              />
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="iq-media-group">
                                <a href="#" className="iq-media">
                                  <img
                                    src="admin/images/user/01.jpg"
                                    className="img-fluid avatar-40 rounded-circle"
                                    alt
                                  />
                                </a>
                                <a href="#" className="iq-media">
                                  <img
                                    src="admin/images/user/02.jpg"
                                    className="img-fluid avatar-40 rounded-circle"
                                    alt
                                  />
                                </a>
                                <a href="#" className="iq-media">
                                  <img
                                    src="admin/images/user/03.jpg"
                                    className="img-fluid avatar-40 rounded-circle"
                                    alt
                                  />
                                </a>
                                <a href="#" className="iq-media">
                                  <img
                                    src="admin/images/user/04.jpg"
                                    className="img-fluid avatar-40 rounded-circle"
                                    alt
                                  />
                                </a>
                              </div>
                              <div>
                                <a href="#" className="btn bg-warning-light">
                                  Development
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="col-lg-4">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="mb-3">Admin Panel Customization</h5>
                            <p className="mb-3">
                              <i className="las la-calendar-check mr-2" />
                              02 / 02 / 2021
                            </p>
                            <div className="iq-progress-bar bg-primary-light mb-4">
                              <span
                                className="bg-primary iq-progress progress-1"
                                data-percent={65}
                              />
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="iq-media-group">
                                <a href="#" className="iq-media">
                                  <img
                                    src="admin/images/user/01.jpg"
                                    className="img-fluid avatar-40 rounded-circle"
                                    alt
                                  />
                                </a>
                                <a href="#" className="iq-media">
                                  <img
                                    src="admin/images/user/02.jpg"
                                    className="img-fluid avatar-40 rounded-circle"
                                    alt
                                  />
                                </a>
                                <a href="#" className="iq-media">
                                  <img
                                    src="admin/images/user/03.jpg"
                                    className="img-fluid avatar-40 rounded-circle"
                                    alt
                                  />
                                </a>
                                <a href="#" className="iq-media">
                                  <img
                                    src="admin/images/user/04.jpg"
                                    className="img-fluid avatar-40 rounded-circle"
                                    alt
                                  />
                                </a>
                              </div>
                              <div>
                                <a href="#" className="btn bg-primary-light">
                                  Content
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Page end  */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="iq-sidebar  sidebar-default ">
      <div className="iq-sidebar-logo d-flex align-items-center">
        <Link to="/dashboard" className="header-logo">
          <img src="admin/images/logo.svg" alt="logo" />
          <h3 className="logo-title light-logo">Webkit</h3>
        </Link>
        <div className="iq-menu-bt-sidebar ml-0">
          <i className="las la-bars wrapper-menu" />
        </div>
      </div>
      <div className="data-scrollbar" data-scroll={1}>
        <nav className="iq-sidebar-menu">
          <ul id="iq-sidebar-toggle" className="iq-menu">
            <li className="active">
              <Link to="/dashboard" className="svg-icon">
                <svg
                  className="svg-icon"
                  width={25}
                  height={25}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span className="ml-4">Dashboard</span>
              </Link>
            </li>
            <li className>
              <Link to="/admin_user" className="svg-icon">
                <svg
                  className="svg-icon"
                  width={25}
                  height={25}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
                <span className="ml-4">Profile</span>
              </Link>
            </li>
            {/* <li className>
              <a href="../backend/page-desk.html" className="svg-icon">
                <svg
                  className="svg-icon"
                  width={25}
                  height={25}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1={12} y1="22.08" x2={12} y2={12} />
                </svg>
                <span className="ml-4">Desk</span>
              </a>
            </li> */}
            <li className=" ">
              <a
                href="#user"
                className="collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <svg
                  className="svg-icon"
                  id="p-dash12"
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1={16} y1={13} x2={8} y2={13} />
                  <line x1={16} y1={17} x2={8} y2={17} />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span className="ml-4"> Food Categories</span>
                <i className="las la-angle-right iq-arrow-right arrow-active" />
                <i className="las la-angle-down iq-arrow-right arrow-hover" />
              </a>
              <ul
                id="user"
                className="iq-submenu collapse"
                data-parent="#otherpage"
              >
                <li className>
                  <Link to="/add_category">
                    <i className="las la-minus" />
                    <span>Add Food Category</span>
                  </Link>
                </li>
                <li className>
                  <Link to="/manage_category">
                    <i className="las la-minus" />
                    <span>Manage Food Category</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className=" ">
              <a
                href="#user2"
                className="collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <svg
                  className="svg-icon"
                  id="p-dash15"
                  width={20}
                  height={20}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1={16} y1={13} x2={8} y2={13} />
                  <line x1={16} y1={17} x2={8} y2={17} />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span className="ml-4">Foods</span>
                <i className="las la-angle-right iq-arrow-right arrow-active" />
                <i className="las la-angle-down iq-arrow-right arrow-hover" />
              </a>
              <ul
                id="user2"
                className="iq-submenu collapse"
                data-parent="#otherpage"
              >
                <li className>
                  <Link to="/add_product">
                    <i className="las la-minus" />
                    <span>Add Food</span>
                  </Link>
                </li>
                <li className>
                  <Link to="/manage_product">
                    <i className="las la-minus" />
                    <span>Manage Food</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className=" ">
              <a
                href="#otherpage"
                className="collapsed"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <svg
                  className="svg-icon"
                  width={25}
                  height={25}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                <span className="ml-4">other page</span>
                <i className="las la-angle-right iq-arrow-right arrow-active" />
                <i className="las la-angle-down iq-arrow-right arrow-hover" />
              </a>
              <ul
                id="otherpage"
                className="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li className>
                  <a href="../backend/pages-maintenance.html">
                    <svg
                      className="svg-icon"
                      id="p-dash19"
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                    <span className="ml-4">Maintenance</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="">
              <Link to="/admin_login" class="svg-icon">
                <svg
                  class="svg-icon"
                  width="25"
                  height="25"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                </svg>
                <span class="ml-4">Login</span>
              </Link>
            </li>
          </ul>
        </nav>
        {/* <div className="pt-5 pb-2" /> */}
      </div>
    </div>
  );
}

export default Sidebar;

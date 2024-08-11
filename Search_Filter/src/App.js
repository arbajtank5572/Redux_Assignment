import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Search_Filter/Pages/Dashboard";
import Manage_Product from "./Search_Filter/Pages/Manage_Product";
import Manage_Categories from "./Search_Filter/Pages/Manage_Categories";
import Manage_Contacts from "./Search_Filter/Pages/Manage_Contacts";
import Manage_User from "./Search_Filter/Pages/Manage_User";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/manage_product" element={<Manage_Product />}></Route>
          <Route
            path="/manage_category"
            element={<Manage_Categories />}
          ></Route>
          <Route path="/manage_contacts" element={<Manage_Contacts />}></Route>
          <Route path="/manage_user" element={<Manage_User />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

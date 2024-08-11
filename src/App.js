import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Feature/Website/Pages/Home";
import About from "./Feature/Website/Pages/About";
import Services from "./Feature/Website/Pages/Services";
import Menu from "./Feature/Website/Pages/Menu";
import Contact from "./Feature/Website/Pages/Contact";
import Sign_up from "./Feature/Website/Pages/Sign_up";
import Login from "./Feature/Website/Pages/Login";
import User_Profile from "./Feature/Website/Pages/User_Profile";
import Edit_Profile from "./Feature/Website/Pages/Edit_Profile";
import Dashboard from "./Feature/Admin/Pages/Dashboard";
import Add_Product from "./Feature/Admin/Pages/Add_Product";
import Manage_Products from "./Feature/Admin/Pages/Manage_Products";
import Add_Categories from "./Feature/Admin/Pages/Add_Categories";
import Manage_Categories from "./Feature/Admin/Pages/Manage_Categories";
import Admin_Login from "./Feature/Admin/Pages/Admin_Login";
import Admin_User from "./Feature/Admin/Pages/Admin_User";
import PNF from "./Feature/Website/Pages/PNF";


function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/service" element={<Services/>}></Route>
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/sign_up" element={<Sign_up/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/user_profile" element={<User_Profile/>}></Route>
          <Route path='/edit_profile/:id' element={<Edit_Profile/>}/>
          <Route path="*" element={<PNF/>}></Route>

          {/* admin_side */}

          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/add_product" element={<Add_Product/>}></Route>
          <Route path="/manage_product" element={<Manage_Products/>}></Route>
          <Route path="/add_category" element={<Add_Categories/>}></Route>
          <Route path="/manage_category" element={<Manage_Categories/>}></Route>
          <Route path="/admin_login" element={<Admin_Login/>}></Route>
          <Route path="/admin_user" element={<Admin_User/>}></Route>











        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

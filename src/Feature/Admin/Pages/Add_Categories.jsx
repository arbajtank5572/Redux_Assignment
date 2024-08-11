import React, { useState } from "react";
import Sidebar from "../Componets/Sidebar";
import Header from "../Componets/Header";
import { useDispatch } from "react-redux";
import { insert_categories } from "./CategoriesSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

function Add_Categories() {
  const dispatch = useDispatch();
  const [data, setdata] = useState({
    id: "",
    name: "",
    image: "",
  });

  const ChangeHandel = (e) => {
    setdata({
      ...data,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(data.data);
  };

  function validation() {
    let ans = true;

    if (data.name == "") {
      toast.error(" Food name required");
      ans = false;
      return false;
    }
    if (data.image == "") {
      toast.error(" Food image Required");
      ans = false;
      return false;
    }
    return ans;
  }

  const redirect = useNavigate();

  const SubmitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
      dispatch(insert_categories(data));
      toast.success(`data add succesfully`);
      setdata({ ...data, id: "", name: "", image: "" });
      redirect("/manage_category");
    }
  };

  return (
    <div className="wrapper">
      <Sidebar />
      <Header />

      <div className="content-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-lg-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Add Food</h4>
                  </div>
                </div>
                <div className="card-body">
                  <form
                    method="post"
                    onChange={ChangeHandel}
                    onSubmit={SubmitHandel}
                  >
                    <div className="form-group">
                      <label htmlFor="email">Food Name:</label>
                      <input
                        type="name"
                        className="form-control"
                        id="name"
                        name="name"
                        value={data.name}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pwd"> Food Image:</label>
                      <input
                        type="url"
                        className="form-control"
                        id="price"
                        name="image"
                        value={data.image}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Add
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add_Categories;

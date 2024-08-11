import React, { useEffect, useState } from "react";
import Header from "../Componets/Header";
import Sidebar from "../Componets/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { get_categories } from "./CategoriesSlice";
import { toast } from "react-toastify";
import { insert_product } from "./ProductSlice";
import { redirect } from "react-router";

function Add_Product() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_categories());
  });
  const { categories } = useSelector((state) => state.categories);
  const [data, setdata] = useState({
    id: "",
    cate_id: "",
    name: "",
    image: "",
    price: "",
    discount: "",
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

    if (data.cate_id == "") {
      toast.error("Select Category required");
      ans = false;
      return false;
    }
    if (data.name == "") {
      toast.error("Enter Food Name");
      ans = false;
      return false;
    }
    if (data.discount == "") {
      toast.error("Enter discount Price ");
      ans = false;
      return false;
    }
    if (data.price == "") {
      toast.error("Enter Food Price ");
      ans = false;
      return false;
    }
    if (data.image == "") {
      toast.error("Food Image Field is required ");
      ans = false;
      return false;
    }
    return ans;
  }
  const SubmitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
      dispatch(insert_product(data));
      toast.success(`data add succesfully`);
      setdata({
        ...data,
        id: "",
        cate_id: "",
        name: "",
        image: "",
        price: "",
        discount: "",
        brand: "",
      });
      redirect("/manage_category");
    }
  };

  return (
    <div class="wrapper">
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
                    {/* <div class="card"> */}
                    <div className="form-group">
                      <label htmlFor="email">Select Categories:</label>
                      <select
                        value={data.cate_id}
                        // onChange={ChangeHandel}
                        name="cate_id"
                        className="form-select p-2"
                        style={{ borderRadius: "15px" }}
                      >
                        {/* <option value="">Select Categories</option> */}
                        {categories &&
                          categories.map((val) => {
                            return <option value={val.id}>{val.name}</option>;
                          })}
                      </select>
                    </div>
                    {/* </div> */}
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
                      <label htmlFor="pwd">Price:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="price"
                        name="price"
                        value={data.price}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pwd">Discount:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="discount"
                        name="discount"
                        value={data.discount}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pwd">Image:</label>
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

export default Add_Product;

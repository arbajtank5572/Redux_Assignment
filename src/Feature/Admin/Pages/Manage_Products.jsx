import React, { useEffect, useState } from "react";
import Header from "../Componets/Header";
import Sidebar from "../Componets/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { delete_product, get_product } from "./ProductSlice";
import { get_categories } from "./CategoriesSlice";
import { toast } from "react-toastify";

function Manage_Products() {
  const [data1, setdata1] = useState("");
  console.log(data1);
  const { name, product } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_product());
    dispatch(get_categories());
  }, []);

  const { categories } = useSelector((state) => state.categories);
  const editproduct = (id) => {
    const result = product.filter((value) => {
      return value.id == id;
    });
    console.log(result);
    setdata(result[0]);
  };

  const [data, setdata] = useState({
    cate_id: "",
    name: "",
    image: "",
    price: "",
    discount: "",
    brand: "",
  });

  const ChangeHandel = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    console.log(data.data);
  };
  const SubmitHandel = async (e) => {
    e.preventDefault();
    dispatch(editproduct(data));
    toast.success("Data Update Success ");
    setdata({
      ...data,
      name: "",
      image: "",
      price: "",
      discount: "",
      cate_id: "",
      brand: "",
    });
  };

  return (
    <div class="wrapper">
      <Sidebar />
      <Header />

      <div class="content-page">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header d-flex justify-content-between">
                  <div class="header-title">
                    <h4 class="card-title">Manage Food Items</h4>
                  </div>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table
                      id="datatable"
                      class="table data-table table-striped"
                    >
                      <thead>
                        <tr class="ligth">
                          <th>Categories ID</th>
                          <th>Food Image</th>
                          <th>Food Name</th>
                          <th> Price</th>
                          <th> Discount</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product
                          // .filter((value) => {
                          //   return data1 === ""
                          //     ? value
                          //     : value.name &&
                          //         value.name
                          //           .toLowerCase()
                          //           .includes(data1.toLowerCase());
                          // })
                          .map((value) => {
                            return (
                              <tr>
                                <td>{value.cate_id}</td>
                                <td>
                                  <img
                                    src={value.image}
                                    alt=""
                                    height={100}
                                    width={100}
                                  />
                                </td>
                                <td>{value.name}</td>
                                <td>₹{value.price}</td>
                                <td>{value.discount}%</td>
                                <td>
                                  <button
                                    className="btn btn-primary me-3"
                                    onClick={() => editproduct(value.id)}
                                    data-bs-toggle="modal"
                                    data-bs-target="#myModal"
                                  >
                                    Edit
                                  </button>
                                  <button
                                    className="btn btn-danger"
                                    onClick={() => {
                                      dispatch(delete_product(value.id));
                                      toast.success(" Data Delete Success");
                                      return dispatch(get_product());
                                    }}
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            );
                          })}

                        {/* The Modal */}
                        <div className="modal" id="myModal">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              {/* Modal Header */}
                              <div className="modal-header">
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                />
                              </div>
                              {/* Modal body */}
                              <div className="modal-body">
                                {/* <form
                                  className="row g-3"
                                  method="post"
                                  onChange={ChangeHandel}
                                  onSubmit={SubmitHandel}
                                >
                                  <select
                                    value={data.cate_id}
                                    onChange={ChangeHandel}
                                    name="cate_id"
                                    className="form-select"
                                  >
                                    <option value="">Select Categories</option>
                                    {categories &&
                                      categories.map((val) => {
                                        return (
                                          <option value={val.id}>
                                            {val.name}
                                          </option>
                                        );
                                      })}
                                  </select>
                                  <div className="col-12">
                                    <label
                                      htmlFor="inputNanme4"
                                      className="form-label"
                                    >
                                      {" "}
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="name"
                                      value={data.name}
                                      id="inputNanme4"
                                    />
                                  </div>
                                  <div className="col-12">
                                    <label
                                      htmlFor="inputNanme4"
                                      className="form-label"
                                    >
                                      {" "}
                                      Brand
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="brand"
                                      value={data.brand}
                                      id="inputNanme4"
                                    />
                                  </div>
                                  <div className="col-12">
                                    <label
                                      htmlFor="inputEmail4"
                                      className="form-label"
                                    >
                                      Image
                                    </label>
                                    <input
                                      type="url"
                                      className="form-control"
                                      name="image"
                                      value={data.image}
                                      id="inputEmail4"
                                    />
                                  </div>
                                  <div className="col-12">
                                    <label
                                      htmlFor="inputEmail4"
                                      className="form-label"
                                    >
                                      Price
                                    </label>
                                    <input
                                      type="tel"
                                      className="form-control"
                                      name="price"
                                      value={data.price}
                                      id="inputEmail4"
                                    />
                                  </div>
                                  <div className="col-12">
                                    <label
                                      htmlFor="inputEmail4"
                                      className="form-label"
                                    >
                                      Discount
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="discount"
                                      value={data.discount}
                                      id="inputEmail4"
                                    />
                                  </div>
                                  <div className="text-center mt-5">
                                    <button
                                      type="submit"
                                      className="btn btn-primary"
                                      data-bs-dismiss="modal"
                                    >
                                      Save
                                    </button>
                                  </div>
                                </form> */}
                              </div>
                              <div className="card-body">
                                <form
                                  method="post"
                                  onChange={ChangeHandel}
                                  onSubmit={SubmitHandel}
                                >
                                  {/* <div class="card"> */}
                                  <div className="form-group">
                                    <label htmlFor="email">
                                      Select Categories:
                                    </label>
                                    {/* <select
                                      value={data.cate_id}
                                      onChange={ChangeHandel}
                                      name="cate_id"
                                      className="form-select p-2"
                                      style={{ borderRadius: "15px" }}
                                    >
                                      <option value="">Select Categories</option>
                                      {categories &&
                                        categories.map((val) => {
                                          return (
                                            <option value={val.id}>
                                              {val.name}
                                            </option>
                                          );
                                        })}
                                    </select> */}
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
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                  >
                                    Update
                                  </button>
                                </form>
                              </div>
                              {/* Modal footer */}
                            </div>
                          </div>
                        </div>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage_Products;

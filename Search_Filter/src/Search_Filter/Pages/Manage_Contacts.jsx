import React, { useEffect, useState } from "react";
import Side_Bar from "../Component/Side_Bar";
import Header from "../Component/Header";
import axios from "axios";

function Manage_Contacts() {
  useEffect(() => {
    fetch();
  }, []);

  const [search, setsearch] = useState("");
  console.log(search);

  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/contact`);
    console.log(res.data);
    setData(res.data);
  };
  return (
    <div class="container-xxl position-relative bg-white d-flex p-0 mt-0">
      <Side_Bar />
      <div className="content">
        <Header />
        <div class="container-fluid pt-5 px-4 mt-5">
          <div class="col-12">
            <div class="bg-light rounded h-100 p-4">
              <h6 class="mb-4">Manage Contacts :-</h6>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="input-group mb-4">
                  <input
                    type="text"
                    onChange={(e) => setsearch(e.target.value)}
                    value={search}
                    className="form-control"
                    placeholder="Manage_Contacts"
                  />
                  <button class="btn btn-primary" type="button">
                    Search
                  </button>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Full Name</th>
                      <th scope="col">Email Address</th>
                      <th scope="col">Subject</th>
                      <th scope="col">Comment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data 
                    .filter((value) => {
                      return search === ""
                      ? value 
                      : value.name &&
                      value.name
                      .toLowerCase()
                      .includes(search.toLowerCase());
                    })
                      .map((value, index) => {
                        return (
                          <tr key={index}>
                            <td>{value.id}</td>
                            <td scope="row">{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.subject}</td>
                            <td>
                              <div style={{ width: "300px" }}>
                                {value.comment}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage_Contacts;

import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { toast } from "react-toastify";
import "./AllCustomers.css";

function AllCustomers() {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = "http://localhost:8080/allcustomers";

    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        if (result["status"] === "success") {
          setCustomers(result["data"]);
          toast.success("Here's All Customers");
        } else {
          toast.error(result["error"]);
        }
      })
      .catch((error) => {
        toast.error("Error fetching customers : " + error.message);
      });
  }, []);
  console.log(customers);

  return (
    <div className="mainPage-AllCust">
      <header className="header-container">
        {" "}
        <h1>
          <b>All Customers</b>
        </h1>
      </header>
      <div className="CustCard-container">
        {customers.length > 0 ? (
          customers.map((customer) => (
            <div className="CustCard" key={customer.id}>
              <h2>
                {" "}
                Name : {customer.firstname} {customer.lastname}{" "}
              </h2>
              <h2> Email : {customer.email} </h2>
              <h2> City : {customer.city} </h2>
              <h2> State : {customer.state} </h2>
              <h2> Phone No : {customer.phone} </h2>
            </div>
          ))
        ) : (
          <div className="no-customers">
            <p>No Customers</p>
          </div>
        )}
      </div>
      <footer className="footer-container">
        {" "}
        <h3>All Rights Reserved @BUSJET</h3>{" "}
      </footer>
    </div>
  );
}

export default AllCustomers;

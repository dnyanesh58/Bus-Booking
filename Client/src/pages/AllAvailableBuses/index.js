import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import './AllAvailableBus.css'
import { Navigate, useNavigate } from "react-router";


function AllAvailableBuses() {
  const [buses, setBuses] = useState([]);
  const navigate = useNavigate();
 
  const handleDeleteBus = (id) => {
    const url = 'http://localhost:8080/bus/delete/'+id;
    axios.delete(url).
    then((response) => {
      const result = response.data
      console.log(result)
      if(result['status'] === "success")
      {
        toast.success("Bus deleted successfully");
      }
      else
      {
        toast.error("Error deleting bus")
      }
    }).catch((error) => {
        toast.error("Error deleting bus : "+error.message);
    });
  }

  const modifiedData = ((bus) => {
    navigate("/UpdateBus", { state: { result: bus } });
  });

  useEffect(() => {
    const url = "http://localhost:8080/allbus";

    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        if (result['status'] === "success") {
          setBuses(result['data']);
          toast.success("Here's All Buses available");
        } else {
          toast.error(result["error"]);
        }
      })
      .catch((error) => {
        toast.error("Error fetching all buses: " + error.message);
      });
  }, []);
  console.log(buses)
    
  return (
    <div className="mainPage-Allbus">
    <header className="header-container"> <h1><b>All Buses</b></h1></header>
      <div className="busCard-container">
      {buses.length > 0 ? (
        buses.map((bus) => (
          <div className="busCard" key={bus.id}>
          <h2><b> {bus.source} - {bus.destination} </b></h2>
            <h2> {bus.busno} </h2>
            <h2> {new Date(bus.date).toLocaleDateString()} - {bus.time} </h2>
            <h2> <b> $ {bus.amount} </b> </h2>
            <button className="btn btn-danger" onClick={() => handleDeleteBus(bus.busid)}> Delete </button>
            <button className="btn btn-warning" onClick={() => modifiedData(bus)}> Update </button>
          </div>
        ))
      ) : (
        <div className="no-buses">
          <p>No buses available</p>
        </div>
      )}
      </div>
      <footer className="footer-container"> <h3>All Rights Reserved @BUSJET</h3> </footer>
    </div>
  );
}

export default AllAvailableBuses;

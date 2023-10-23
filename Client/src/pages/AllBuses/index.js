import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import './AllBus.css'
import { Navigate, useNavigate } from "react-router";
import { useLocation } from "react-router";


function AllBuses() {
  const [buses, setBuses] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const res = location.state && location.state.result; 

  const handleTicketBook = ((bus) => {
    navigate("/TicketData", { state: { result: bus } });
  });

  useEffect(() => {
      setBuses(res);
  }, []);

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
            <button className="btn btn-outline-success" onClick={() => handleTicketBook(bus)}> Book Ticket </button>
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

export default AllBuses;

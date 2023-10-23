import React from "react";
import { Button, Card } from "react-bootstrap";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import AddBus from "../AddBus";
import { useNavigate } from "react-router";

function AdminDashboard() {
  const { id, firstname, lastName } = sessionStorage;
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/AdminSignin"
  };

  const gotoAddbus = () => {
    navigate("/AddBus");
  }

  const gotoAllAvailableBus = () => {
    navigate("/AllAvailableBuses");
  };

  const gotoAllCustomer = () => {
    navigate("/AllCustomers")
  };

  return (
    <div className="body2">
      <header className="header-container">
        <div className="button-dan">
        <h1 className="header-message"> Welcome Mr. {firstname} </h1>
          <button className="btn btn-danger" onClick={handleLogout}> LOGOUT </button>
          <button className="btn btn-danger"> PROFILE </button>
          <button className="btn btn-danger"> UPDATE </button>
        </div>
      </header>
      <div className="addbus-container">
        <div className="addbus-pair">
          <Card className="addbus">
            <h1>ADD BUS</h1>
            <button className="btn btn-primary" onClick={gotoAddbus}>click Here</button>
          </Card>
          <Card className="addbus">
            <h1>All BUS</h1>
            <button className="btn btn-primary" onClick={gotoAllAvailableBus}>click Here</button>
          </Card>
        </div>
        <div className="addbus-pair">
          <Card className="addbus">
            <h1>ALL CUSTOMERS</h1>
            <button className="btn btn-primary" onClick={gotoAllCustomer}>click Here</button>
          </Card>
          <Card className="addbus">
            <h1>ALL TICKETS</h1>
            <button className="btn btn-primary">click Here</button>
          </Card>
        </div>
      </div>
      <footer className="footer-container">
        <h2>All rights reserved by BUSJET</h2>
      </footer>
    </div>
  );
}

export default AdminDashboard;

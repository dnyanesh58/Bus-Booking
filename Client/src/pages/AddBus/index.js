import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, Router, useNavigate } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";

function AddBus() {
  const [busid, setBusid] = useState("");
  const [busno, setBusno] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [amount, setAmount] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const navigate = useNavigate();

  const addNewBus = () => {
    if (busid.length === 0) {
      toast.warning("Please Enter Bus id");
    } else if (busno.length === 0) {
      toast.warning("Please Enter Bus Number");
    } else if (source.length === 0) {
      toast.warning("Please Enter Source");
    } else if (destination.length === 0) {
      toast.warning("Please Enter Destination");
    } else if (date.length === 0) {
      toast.warning("Please Enter Date");
    } else if (time.length === 0) {
      toast.warning("Please Enter Time");
    } else if (amount.length === 0) {
      toast.warning("Please Enter Amount");
    } else if (thumbnail.length === 0) {
      toast.warning("Please Enter thumbnail");
    } else {
      const formData = new FormData();
      formData.append("busid", busid);
      formData.append("busno", busno);
      formData.append("source", source);
      formData.append("destination", destination);
      formData.append("date", date);
      formData.append("time", time);
      formData.append("amount", amount);
      formData.append("thumbnail", thumbnail);

      const url = "http://localhost:8080/addbus";
      axios.post(url, formData).then((response) => {
        const result = response.data;
        console.log(result);
        if (result["status"] === "success") {
          toast.success("Successfully added");
          
          navigate("/AllAvailableBuses");
        } else {
          toast.error(result["error"]);
        }
      });
    }
  };

  return (
    <div className="mainPage">
      <h1 style={{ textAlign: "center" }}>Add Bus</h1>
      <div className="addBusPage">
        <div className="container-bus">
          <form>
            <div className="form-group row">
              <label
                htmlFor="busid"
                className="col-sm-2 col-form-label"
                style={{ color: "black" }}
              >
                Bus Id :
              </label>
              <div className="col-sm-10">
                <input
                  onChange={(e) => setBusid(e.target.value)}
                  type="number"
                  placeholder="Enter the busid"
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="busno"
                className="col-sm-2 col-form-label"
                style={{ color: "black" }}
              >
                Bus Number :
              </label>
              <div className="col-sm-10">
                <input
                  onChange={(e) => setBusno(e.target.value)}
                  type="text"
                  placeholder="Enter the busno"
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="source"
                className="col-sm-2 col-form-label"
                style={{ color: "black" }}
              >
                Source :
              </label>
              <div className="col-sm-10">
                <input
                  onChange={(e) => setSource(e.target.value)}
                  type="text"
                  placeholder="Enter the source"
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="destination"
                className="col-sm-2 col-form-label"
                style={{ color: "black" }}
              >
                Destination :
              </label>
              <div className="col-sm-10">
                <input
                  onChange={(e) => setDestination(e.target.value)}
                  type="text"
                  placeholder="Enter the destination"
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="date"
                className="col-sm-2 col-form-label"
                style={{ color: "black" }}
              >
                Date :
              </label>
              <div className="col-sm-10">
                <input
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  placeholder="Enter the date"
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="time"
                className="col-sm-2 col-form-label"
                style={{ color: "black" }}
              >
                Time :
              </label>
              <div className="col-sm-10">
                <input
                  onChange={(e) => setTime(e.target.value)}
                  type="text"
                  placeholder="Enter the time"
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="amount"
                className="col-sm-2 col-form-label"
                style={{ color: "black" }}
              >
                Amount :
              </label>
              <div className="col-sm-10">
                <input
                  onChange={(e) => setAmount(e.target.value)}
                  type="number"
                  placeholder="Enter the Amount"
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor=""
                className="col-sm-2 col-form-label"
                style={{ color: "black" }}
              >
                Thumbnail :
              </label>
              <div className="col-sm-10">
                <input
                  onChange={(e) => setThumbnail(e.target.files[0])}
                  type="file"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button onClick={addNewBus} className="btn btn-dark">
                  Add Bus
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBus;

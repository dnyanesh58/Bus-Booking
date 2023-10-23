import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, Router, useNavigate } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

function UpdateBus() {
  const location = useLocation();
  const res = location.state && location.state.result;
  console.log(res);
  const navigate = useNavigate();

  const [bus, setBus] = useState({
    busid: res.busid || "",
    busno: res.busno || "",
    source: res.source || "",
    destination: res.destination || "",
    date: res.date || "",
    time: res.time || "",
    amount: res.amount || "",
    thumbnail: res.thumbnail || null,
  });

  const updateExistBus = () => {
    const url = "http://localhost:8080/update";

    const formData = new FormData();
    formData.append("busid", bus.busid);
    formData.append("busno", bus.busno);
    formData.append("source", bus.source);
    formData.append("destination", bus.destination);
    formData.append("date", bus.date);
    formData.append("time", bus.time);
    formData.append("amount", bus.amount);
    formData.append("thumbnail", bus.thumbnail);

    axios.put(url, formData).then((response) => {
      const result = response.data;
      console.log(result);
      if (result["status"] === "success") {
        toast.success("Successfully Updated");

        navigate("/AllAvailableBuses");
      } else {
        toast.error(result["error"]);
      }
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setBus({ ...bus, thumbnail: file });
  };

  return (
    <div className="updatePage">
      <h1 style={{ textAlign: "center" }}>Update Bus</h1>
      <div className="updateBusPage">
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
                  type="text"
                  onChange={(e) => setBus({ ...bus, busid: e.target.value})}
                  value={bus.busid}
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
                  onChange={(e) => setBus({ ...bus, busno: e.target.value })}
                  type="text"
                  value={bus.busno}
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
                  onChange={(e) => setBus({ ...bus, source: e.target.value })}
                  type="text"
                  value={bus.source}
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
                  onChange={(e) =>
                    setBus({ ...bus, destination: e.target.value })
                  }
                  type="text"
                  value={bus.destination}
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
                  onChange={(e) => setBus({ ...bus, date: e.target.value })}
                  type="date"
                  value={bus.date}
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
                  onChange={(e) => setBus({ ...bus, time: e.target.value })}
                  type="text"
                  value={bus.time}
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
                  onChange={(e) => setBus({ ...bus, amount: e.target.value })}
                  type="number"
                  value={bus.amount}
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
                  accept="image/*"
                  onChange={handleFileChange}
                  type="file"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button onClick={updateExistBus} className="btn btn-dark">
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

export default UpdateBus;

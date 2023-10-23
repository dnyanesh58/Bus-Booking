import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./ticket.css";
import { useLocation, useNavigate } from "react-router";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const TicketData = () => {
  
  const { state } = useLocation();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("gender");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [seatno, setSeatno] = useState("");
  const [ busid,setBusid ] = useState("");
  const { amount } = state;
  const id = sessionStorage["id"];


  sessionStorage["name"] = name;
  sessionStorage["age"] = age;
  sessionStorage["gender"] = gender;
  sessionStorage["source"] = source;
  sessionStorage["destination"] = destination;
  sessionStorage["time"] = time;
  sessionStorage["date"] = date;
  sessionStorage["seatno"] = seatno;

  const navigate = useNavigate();
 

  const Ticket = () => {
    if (name.length == 0) {
      toast("please enter firstname");
    }
    if (age.length == 0) {
      toast("please enter lastname");
    }
    if (gender.length == 0) {
      toast("please enter email");
    }
    if (source.length == 0) {
      toast("please enter password");
    }
    if (destination.length == 0) {
      toast("please enter city");
    }
    if (date.length == 0) {
      toast("please enter state");
    }
    if (time.length == 0) {
      toast("please enter time");
    } 
    if (seatno.length == 0) 
    { 
      toast("please enter seatno");
    }
    if(busid.length == 0)
    {
      toast("please enter busid");
    }
    else {
      const body = {
        name,
        age,
        gender,
        source,
        destination,
        date,
        time,
        seatno,
        id,
        busid,
      };
      const url = "http://localhost:8080/bookticket";
      axios.post(url, body).then((response) => {
        const result = response.data;
        console.log(result);

        if (result["status"] == "success") {
          toast("details added");

          navigate("/payment", { state: { amount: amount } });
        } else {
          toast(result["error"]);
        }
      });
    }
  };

  return (
    <div className="backimage">
      <div className="body">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h1 className="Cofirm_h1">Confirm Your Ticket</h1>
            <div className="form">
              <div className="mb-3">
                <div className="label-control">Name</div>
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <div className="label-control">Age</div>
                <input
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  type=""
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label for="gender">Gender:</label>
                <select
                  type="text"
                  className="form-control"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                >
                  <option value="gender:">gender:</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
              </div>

              <div className="mb-3">
                <div className="label-control">Source</div>
                <input
                  onChange={(e) => {
                    setSource(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <div className="label-control">Destination</div>
                <input
                  onChange={(e) => {
                    setDestination(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <div className="label-control">Date</div>
                <input
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  type="date"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <div className="label-control">Time</div>
                <input
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <div className="label-control">Seatno</div>
                <input
                  onChange={(e) => {
                    setSeatno(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <div className="label-control">Bus Id</div>
                <input
                  onChange={(e) => {
                    setBusid(e.target.value);
                  }}
                  type="number"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <button onClick={Ticket} className="button btn btn-success">
                  Confirm
                </button>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};
export default TicketData;

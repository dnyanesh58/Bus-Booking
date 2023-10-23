import { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./search.css";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, Router, useNavigate } from "react-router-dom";

const Search = () => {
  const { id, firstname, lastName } = sessionStorage;

  const [date, setDate] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/CustSignin";
  };

  const SearchBus = () => {
    if (source.length === 0) {
      toast.warning("please Enter the source");
    } else if (destination.length === 0) {
      toast.warning("please enter the destination");
    } else if (date.length === 0) {
      toast.warning("please enter the date");
    } else {
      const body = {
        date,
        source,
        destination,
      };

      const url = `http://localhost:8080/bus/search`;

      //post method of signup API
      axios.post(url, body).then((response) => {
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Search success");
          //navigate to the signin page

          const modifiedData = result.data.map((bus) => {
            return {
              ...bus,
              title: `${bus.busNo} ${bus.source} ${bus.destination} ${bus.time}
                                     ${bus.date} ${bus.amount} `,
            };
          });

          navigate("/AllBuses", { state: { result: modifiedData } });
        } else {
          toast.error(result["error"]);
        }
      });
    }
  };

  return (
    <div className="background">
      <div>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/Homepage">BUSJET</Navbar.Brand>
            <Nav className="me-auto">
              <h1 className="header-message"> Welcome Mr. {firstname} </h1>
              <button className="btn btn-danger" onClick={handleLogout}>
                {" "}
                LOGOUT{" "}
              </button>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="form">
        <div className="row">
          <div className="col"></div>
          <div className="col">
          <h1>Search Buses Here</h1>
            <div>
              <label htmlFor="" className="label-control">
                Source
              </label>
              <input
                onChange={(e) => {
                  setSource(e.target.value);
                }}
                type="text"
                placeholder="Source"
                className="form-control"
              />
            </div>

            <div>
              <label htmlFor="" className="label-control">
                destination
              </label>
              <input
                onChange={(e) => {
                  setDestination(e.target.value);
                }}
                type="text"
                placeholder="Destination"
                className="form-control"
              />
            </div>

            <div>
              <label htmlFor="" className="label-control">
                date
              </label>
              <input
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                type="date"
                placeholder="date"
                className="form-control"
              />
            </div>
            <div className="sear">
              <button onClick={SearchBus} className="btn btn-info">
                Search Bus
              </button>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};
export default Search;

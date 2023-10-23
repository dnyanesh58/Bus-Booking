import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./print.css";
import { useLocation, useNavigate } from "react-router";
import { Hidden } from "@material-ui/core";
import { Container } from "react-bootstrap";
// import { Payment } from '@material-ui/icons'
//import jsPDF from 'jspdf'

import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const { id, firstname, lastName } = sessionStorage;
const Payment = () => {
  const { name, age, source, destination, date, time, seatno, gender } =
    sessionStorage;

  //     const { state } = useLocation()
  //     const {amount} = state

  // const navigate = useNavigate('');

  // const download = () => {

  //navigate('/Print')
  // }

  //  const pdfGenerate = () => {
  //      var doc=new jsPDF('landscape','px', 'a4', 'false');
  //      doc.addPage()
  //      doc.text(60, 60, '{name}')

  //      doc.save('a.pdf')

  return (
    <div>
      <div>
        <div className="row ">
          <div className="col"></div>
          <div className="col">
            <div className="row">
              <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                  <Navbar.Brand href="/Homepage">BUSJET</Navbar.Brand>
                  <Nav className="me-auto">
                    <Nav.Link>Welcome </Nav.Link>
                    <Nav.Link> {firstname} </Nav.Link>
                    <button className="btn btn-warning">Logout</button>
                  </Nav>
                </Container>
              </Navbar>
            </div>
            <div className="heading">Get Your Ticket</div>
            <body>
              <center>
                <table border="4">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <td>
                        <input
                          type="text"
                          value={name}
                          className="form-control"
                        />
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Age</th>
                      <td>
                        <input
                          type="text"
                          value={age}
                          className="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Source</th>
                      <td>
                        <input
                          type="text"
                          value={source}
                          className="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Destination</th>
                      <td>
                        <input
                          type="text"
                          value={destination}
                          className="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Date</th>
                      <td>
                        <input
                          type="text"
                          value={date}
                          className="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Time</th>
                      <td>
                        <input
                          type="text"
                          value={time}
                          className="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>SeatNo</th>
                      <td>
                        <input
                          type="text"
                          value={seatno}
                          className="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Gender</th>
                      <td>
                        <input
                          type="text"
                          value={gender}
                          className="form-control"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </center>
            </body>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};
export default Payment;

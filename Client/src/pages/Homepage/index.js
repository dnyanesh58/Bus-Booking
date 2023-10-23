import React from "react";
import { Link } from "react-router-dom";
import "./page.css";
import {
  Nav,
  Navbar,
  NavDropdown,
  Carousel,
  Image,
  Badge,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import * as FaIcons from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FcHome, FcPhone } from "react-icons/fc";
import { CgProfile, IoMdLogOut } from "react-icons/cg";
import { IoTicketOutline } from "react-icons/io5";
import { BsPower } from "react-icons/bs";
import { FcSearch } from "react-icons/fc";
import { useNavigate } from "react-router";
import firstSlide from '../../images/HongKo.jpg'
import secondSlide from '../../images/london.jpg'
import thirdSlide from '../../images/france-eiffel-tower-paris.jpg'


const HomePage = () => {
  return (
    <div>
      <Navbar
        className="navbar navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div>
          <Navbar.Toggle />
          <Navbar.Collapse className="navbar-brand">
            <a class="navbar-brand" href="HomePage">
              {" "}
              <big>
                <b>BUSJET</b>
              </big>
            </a>
            <Nav className="navbar navbar-light">
              <NavDropdown title="Home">
                <NavDropdown.Item href="CustSignin">
                  Customer Signin
                </NavDropdown.Item>
                <NavDropdown.Item href="CustSignup">
                  Customer Signup
                </NavDropdown.Item>
                <NavDropdown.Item href="AdminSignup">
                  Admin Signup
                </NavDropdown.Item>
                <NavDropdown.Item href="AdminSignin">
                  Admin Signin
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="Contact">Contact</Nav.Link>
              <Nav.Link href="About">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div>
        <div>
          <marquee>
            <h2>WELCOME TO BUSJET</h2>
          </marquee>
        </div>
        <div>
        <Carousel>
      <Carousel.Item>
        <Image src= {firstSlide} style={{ width: "100%",height: '500px'}}></Image>
        <Carousel.Caption>
          <h3>Hong Kong</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={secondSlide} style={{ width: "100%",height: '500px' }}></Image>
        <Carousel.Caption>
          <h3>London</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={thirdSlide} style={{ width: "100%",height: '500px' }}></Image>
        <Carousel.Caption>
          <h3>Paris</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
      </div>
      <footer className="footer">ALL RIGHTS RESERVED BY BUSJET 2023</footer>
    </div>
  );
};
export default HomePage;

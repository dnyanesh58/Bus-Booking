import { Link, Router, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";

const CustSignup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //used to navigate from one component to another
  const navigate = useNavigate();

  const signupUser = () => {
    if (firstname.length === 0) {
      toast.warning("Please enter first name");
    } else if (lastname.length === 0) {
      toast.warning("Please enter last name");
    } else if (email.length === 0) {
      toast.warning("Please enter email name");
    } else if (password.length === 0) {
      toast.warning("Please enter password");
    } else if (confirmPassword.length === 0) {
      toast.warning("Please confirm password");
    } else if (password !== confirmPassword) {
      toast.warning("Password does not match");
    } else {
      const body = {
        firstname,
        lastname,
        email,
        password,
        city,
        state,
        phone,
      };
      //url to call API
      const url = `http://localhost:8080/customer/signup`;

      //post method of signup API
      axios.post(url, body).then((response) => {
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Successfully signup");
          //navigate to the signin page
          navigate("/Custsignin");
        } else {
          toast.error(result["error"]);
        }
      });
    }
  };

  return (
    <div>
      <div className="bg">
        <div className="s">
          <h2>SignUp </h2>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="form">
              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  First Name
                </label>
                <input
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter first name"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Last Name
                </label>
                <input
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter last name"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Email Address
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter Email here"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  city
                </label>
                <input
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter City"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  State
                </label>
                <input
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter State"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Phone
                </label>
                <input
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter Phone"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Password
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="Enter password"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Confirm Password
                </label>
                <input
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="confirm password"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <div>
                  Already have an account? <Link to="/Signin">Signin here</Link>
                </div>
                <div class name="btn-primary">
                  {" "}
                  <button onClick={signupUser} className="btn btn-primary">
                    Signup
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};
export default CustSignup;

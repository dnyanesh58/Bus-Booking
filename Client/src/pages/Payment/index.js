import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./pay.css";

import { useLocation, useNavigate } from "react-router";
// import { Payment } from '@material-ui/icons'

const Payment = () => {
  const { name, age, source, destination, date, time, seatno, gender } =
    sessionStorage;

  const { state } = useLocation();
  const { amount } = state;

  const navigate = useNavigate("");

  const download = () => {
    navigate("/Print");
  };

  return (
    <div>
      <div className="backimage">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h1>Confirm Payment</h1>
            <div className="form">
              <div className="mb-3">
                <div className="label-control">Card Holder's Name</div>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <div className="label-control">Card Number</div>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <div className="label-control">Expiration date</div>
                <input type="date" className="form-control" />
              </div>

              <div className="mb-3">
                <div className="label-control">CVV</div>
                <input type="text" className="form-control" />
              </div>

              <div className="mb-3">
                <div className="label-control">Total</div>
                <input type="text" value={amount} className="form-control" />
              </div>

              <div className="mb-3">
                <button onClick={download} className="button btn btn-success">
                  Confirm Payment
                </button>
                <button className="button btn btn-warning">Back</button>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};
export default Payment;

import React, { useState } from "react";
import "./EnterAgent.css";
// import { Button } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EnterAgent() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [ccemail, setCCEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [aname, setAName] = useState("");

  const sendDataToAPI = (e) => {
    e.preventDefault();
    axios
      .post("https://64213b9a86992901b2ae3c66.mockapi.io/crudcrud", {
        firstName,
        lastName,
        email,
        ccemail,
        phone,
        aname,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <div className="conatainer my-3">
      <form onSubmit={sendDataToAPI}>
        <div className="row">
          <div className="col-lg-6 my-3">
            <input
              className=" input1"
              type="text"
              placeholder="First Name"
              required
              name="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="col-lg-6 my-3">
            <input
              className=" input1"
              type="text"
              placeholder="Last Name"
              required
              name="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="col-lg-12 my-3">
            <input
              className=" input2"
              type="email"
              placeholder="Email Address"
              required
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="col-lg-12 my-3">
            <input
              className=" input2"
              type="email"
              placeholder="CC Email Address"
              required
              name="ccemail"
              value={ccemail}
              onChange={(e) => {
                setCCEmail(e.target.value);
              }}
            />
          </div>
          <div className="col-lg-12 my-3">
            <input
              className=" input2"
              type="tel"
              placeholder="Phone Number"
              required
              name="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="col-lg-12 my-3">
            <input
              className=" input2"
              type="text"
              placeholder="Agenct Name"
              required
              name="aname"
              value={aname}
              onChange={(e) => {
                setAName(e.target.value);
              }}
            />
          </div>
        </div>
        <button
          className="my-2 mx-4"
          type="submit"
          disabled={
            !firstName || !lastName || !email || !ccemail || !phone || !aname
          }
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default EnterAgent;

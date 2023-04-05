import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Manually/EnterAgent.css";
import { useNavigate, Link } from "react-router-dom";

function Update() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [ccemail, setCCEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [aname, setAName] = useState("");
  const [id, setId] = useState(null);

  const sendDataToAPI = () => {
    axios
      .put(`https://64213b9a86992901b2ae3c66.mockapi.io/crudcrud/${id}`, {
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
  useEffect(() => {
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setEmail(localStorage.getItem("email"));
    setCCEmail(localStorage.getItem("ccemail"));
    setPhone(localStorage.getItem("phone"));
    setAName(localStorage.getItem("aname"));
    setId(localStorage.getItem("ID"));
  }, []);
  return (
    <>
      <div className="conatainer wrap1 my-3">
        <h3 className="text-center mt-2" style={{ color: "#6c93ba" }}>
          Edit Agent Manually
        </h3>
        <form>
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
          <button className="my-2 " type="button" onClick={sendDataToAPI}>
            Update
          </button>
        </form>
        <div className=" mt-2 add ">
          <Link to="/create">
            <button style={{ fontSize: "18px" }} className="my-2" type="button">
              Add Data
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Update;

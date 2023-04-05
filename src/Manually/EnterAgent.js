import React, { useState } from "react";
import "./EnterAgent.css";
// import { Button } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema = yup.object({
//   firstName: yup.string().required("First Name is required"),
//   lastName: yup.string().required("Last Name is required"),
//   email: yup.string().email().required(" Email is required"),
//   ccemail: yup.string().email().required("CC Email is required"),
//   phone: yup.string().required("Phone Number is required"),
//   aname: yup.string().required("Agent Name is required"),
// });

function EnterAgent() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [ccemail, setCCEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [aname, setAName] = useState("");

  const sendDataToAPI = () => {
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
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="conatainer my-3">
      <form onSubmit={handleSubmit(sendDataToAPI)}>
        <div className="row">
          <div className="col-lg-6 my-3">
            <input
              className=" input1"
              type="text"
              placeholder="First Name"
              name="firstName"
              {...register("firstName", {
                required: true,
                touched: true,
              })}
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            {errors?.firstName?.type === "required" && (
              <p className="mx-3" style={{ color: "red" }}>
                This field is required
              </p>
            )}
          </div>
          <div className="col-lg-6 my-3">
            <input
              className=" input1"
              type="text"
              placeholder="Last Name"
              name="lastName"
              {...register("lastName", {
                required: true,
                touched: true,
              })}
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            {errors?.lastName?.type === "required" && (
              <p className="mx-3" style={{ color: "red" }}>
                This field is required
              </p>
            )}
          </div>
          <div className="col-lg-12 my-3">
            <input
              className=" input2"
              type="email"
              placeholder="Email Address"
              name="email"
              {...register("email", {
                required: true,
                touched: true,
              })}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {errors?.email?.type === "required" && (
              <p className="mx-3" style={{ color: "red" }}>
                This field is required
              </p>
            )}
          </div>
          <div className="col-lg-12 my-3">
            <input
              className=" input2"
              type="email"
              placeholder="CC Email Address"
              name="ccemail"
              {...register("ccemail", {
                required: true,
                touched: true,
              })}
              value={ccemail}
              onChange={(e) => {
                setCCEmail(e.target.value);
              }}
            />
            {errors?.ccemail?.type === "required" && (
              <p className="mx-3" style={{ color: "red" }}>
                This field is required
              </p>
            )}
          </div>
          <div className="col-lg-12 my-3">
            <input
              className=" input2"
              type="tel"
              placeholder="Phone Number"
              name="phone"
              {...register("phone", {
                required: true,
                touched: true,
              })}
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            {errors?.phone?.type === "required" && (
              <p className="mx-3" style={{ color: "red" }}>
                This field is required
              </p>
            )}
          </div>
          <div className="col-lg-12 my-3">
            <input
              className=" input2"
              type="text"
              placeholder="Agenct Name"
              name="aname"
              {...register("aname", {
                required: true,
                touched: true,
              })}
              value={aname}
              onChange={(e) => {
                setAName(e.target.value);
              }}
            />
            {errors?.aname?.type === "required" && (
              <p className="mx-3" style={{ color: "red" }}>
                This field is required
              </p>
            )}
          </div>
        </div>
        <button className="my-2 mx-4" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default EnterAgent;
// disabled={
//   !firstName || !lastName || !email || !ccemail || !phone || !aname
// }

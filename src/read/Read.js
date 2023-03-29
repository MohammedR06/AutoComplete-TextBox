import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
function Read() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get("https://64213b9a86992901b2ae3c66.mockapi.io/crudcrud")
      .then((getData) => {
        console.log(getData.data);
        setApiData(getData.data);
      });
  });
  const setData = (id, firstName, lastName, email, ccemail, phone, aname) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("ccemail", ccemail);
    localStorage.setItem("phone", phone);
    localStorage.setItem("aname", aname);
  };
  const getData = () => {
    axios
      .get("https://64213b9a86992901b2ae3c66.mockapi.io/crudcrud")
      .then((getData) => {
        setApiData(getData.data);
      });
  };
  const onDelete = (id) => {
    axios
      .delete(`https://64213b9a86992901b2ae3c66.mockapi.io/crudcrud/${id}`)
      .then(() => {
        getData();
      });
  };
  return (
    <>
      <div class="table-responsive-sm">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">CC Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Agent Name</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((data, id) => {
              return (
                <tr>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.email}</td>
                  <td>{data.ccemail}</td>
                  <td>{data.phone}</td>
                  <td>{data.aname}</td>
                  <td>
                    {" "}
                    <Link to="/update">
                      <Button
                        color="green"
                        onClick={() => {
                          setData(
                            data.id,
                            data.firstName,
                            data.lastName,
                            data.email,
                            data.ccemail,
                            data.phone,
                            data.aname
                          );
                        }}
                      >
                        Update
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Button
                      color="red"
                      onClick={() => {
                        onDelete(data.id);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Read;

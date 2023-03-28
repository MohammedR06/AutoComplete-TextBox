import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

function AutoCompleteTextbox() {
  const [agent, setAgent] = useState([]);
  const [nameMatch, setNameMatch] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [search, setSearch] = useState("");
  const [searchErr, setSearchErr] = useState(false);
  useEffect(() => {
    const loadName = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments`
      );
      console.log(response.data);
      setAgent(response.data);
    };
    loadName();
  }, []);
  //   console.log(agent);

  const onTextBox = (nameMatch) => {
    let matches = [];
    if (nameMatch.length > 0) {
      matches = agent.filter((user) => {
        const regex = new RegExp(`${nameMatch}`, "gi");
        return user.name.match(regex);
      });
    }
    // console.log("matches", matches);
    setSuggestion(matches);
    setNameMatch(nameMatch);
  };

  return (
    <>
      <div className="conatiner pt-2" id="rcorners2">
        <div className="wrap">
          <h3 style={{ color: "#223461" }}>
            <i className="fa-solid fa-user" style={{ margin: "0 15px" }}></i>
            Agent Details
          </h3>
          <div className="search">
            <input
              className="form-control mx-5 "
              id="inputName"
              type="text"
              placeholder="Search Agent"
              aria-label="default input example"
              value={nameMatch}
              onChange={(e) => {
                onTextBox(e.target.value);
              }}
              required
            />

            {suggestion &&
              suggestion.map((suggestion, i) => {
                return (
                  <ul key={i} id="myUL" className="mx-5 px-4">
                    <li>
                      <a style={{ fontSize: "14px" }}>{suggestion.name}</a>
                    </li>
                  </ul>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default AutoCompleteTextbox;

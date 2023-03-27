import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

function AutoCompleteTextbox() {
  const [agent, setAgent] = useState([]);
  const [nameMatch, setNameMatch] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  useEffect(() => {
    const loadName = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments`
      );
      //   console.log(response.data);
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
        return user.email.match(regex);
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
          <h3 className="">
            <i className="fa-solid fa-user" style={{ margin: "0 15px" }}></i>
            Agent Details
          </h3>
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="Search Agent"
              value={nameMatch}
              onChange={(e) => {
                onTextBox(e.target.value);
              }}
            />
            <button type="submit" className="searchButton">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            {suggestion &&
              suggestion.map((suggestion, i) => {
                return (
                  <ul id="myUL" className="mx-5 px-5">
                    <li>
                      <a style={{ fontSize: "14px" }}>{suggestion.email}</a>
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

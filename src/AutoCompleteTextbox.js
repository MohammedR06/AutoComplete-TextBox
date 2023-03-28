import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

function AutoCompleteTextbox() {
  const [agent, setAgent] = useState([]);
  // const [nameMatch, setNameMatch] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    const loadName = async () => {
      const response = await axios.get(
        `http://62.252.239.190:9020/v1/agents/${text}`
      );
      console.log(response.data);
      // setAgent(response.data);
      setSuggestion(response.data);
    };
    loadName();
  }, [text]);
  //   console.log(agent);

  // const onTextBox = (nameMatch) => {
  //   let matches = [];
  //   if (nameMatch.length > 0) {
  //     matches = agent.filter((user) => {
  //       const regex = new RegExp(`${nameMatch}`, "gi");
  //       return user.name.match(regex);
  //     });
  //   }
  //   console.log("matches", matches);
  //   setSuggestion(matches);
  //   setNameMatch(nameMatch);
  // };
  function onTextBox2(value) {
    setText(value);
  }
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
              value={text}
              onChange={(e) => {
                onTextBox2(e.target.value);
              }}
              required
            />

            {suggestion &&
              suggestion.map((suggestion, i) => {
                return (
                  <ul key={i} id="myUL" className="mx-5 px">
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

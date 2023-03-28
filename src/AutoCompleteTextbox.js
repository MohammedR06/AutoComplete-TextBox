import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import icon from "./icon-agent.png";

function AutoCompleteTextbox() {
  // const [search, setSearch] = useState("");
  const [err, setErr] = useState(false);
  // const [agent, setAgent] = useState([]);
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

  function onTextBox2(value) {
    setText(value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length == 0) {
      setErr(true);
    }
  };
  return (
    <>
      <div className="conatiner pt-2" id="rcorners2">
        <div className="wrap">
          <div className="d-flex mx-5 ">
            <h4 className="mt-3" style={{ color: "#223461" }}>
              <img className="me-2" src={icon} alt="" />
              Agent Details
            </h4>
          </div>

          <div className="search mt-2">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search Agent"
                value={text}
                onChange={(e) => {
                  onTextBox2(e.target.value);
                }}
              />
              {err && text.length <= 0 ? (
                <span className="err">Select Agent</span>
              ) : (
                ""
              )}
            </form>
            {suggestion &&
              suggestion.map((suggestion, i) => {
                return (
                  <div className="div">
                    <ul
                      key={i}
                      id="myUL"
                      className="mx-5 px ul"
                      unselectable="on"
                    >
                      <li>{suggestion.name}</li>
                    </ul>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="pt-4 ag">
          <span>
            <a href="">Enter Agent Manually</a>
          </span>
        </div>
      </div>
    </>
  );
}

export default AutoCompleteTextbox;

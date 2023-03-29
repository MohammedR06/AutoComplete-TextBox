import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import icon from "./icon-agent.png";
import { Link } from "react-router-dom";
import EnterAgent from "./Manually/EnterAgent";

function AutoCompleteTextbox() {
  const [err, setErr] = useState(false);
  const [suggestion, setSuggestion] = useState([]);
  const [text, setText] = useState("");
  const [showText, setShowText] = useState(true);
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
    if (text.length === 0) {
      setErr(true);
    }
  };
  const onClick = () => setShowText(!showText);

  return (
    <>
      <div className="conatiner pt-2" id="rcorners2">
        <div className="wrap">
          <div className="d-flex mx-5 ">
            <h4 className="mt-3 h4" style={{ color: "#223461" }}>
              <img className="me-2 img" src={icon} alt="" />
              Agent Details
            </h4>
          </div>

          <div className="search mt-2">
            <form onSubmit={handleSubmit}>
              <input
                className="input"
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
                  <div className="div" key={i}>
                    <ul id="myUL" className="mx-5 px ul" unselectable="on">
                      <li>{suggestion.name}</li>
                    </ul>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="pt-4 ag">
          <span className="mb-2">
            <Link onClick={onClick}>Enter Agent Manually</Link>
          </span>
          {showText ? <></> : <EnterAgent />}
        </div>
        <div></div>
      </div>
    </>
  );
}

export default AutoCompleteTextbox;

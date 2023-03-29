// import logo from "./logo.svg";
import "./App.css";
import AutoCompleteTextbox from "./AutoCompleteTextbox";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./read/Read";
// import EnterAgent from "./Manually/EnterAgent";
import Update from "./update/Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AutoCompleteTextbox />} />
        <Route path="/read" element={<Read />} />
        <Route path="/create" element={<AutoCompleteTextbox />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

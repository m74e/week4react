import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import logo from "./assets/react.svg";
import x from "./assets/close.svg";

function App() {
  const [list, setList] = useState([
    "Hello this is my first Todo.",
    "Hello this is my second Todo.",
    "Hello this is my 3rd Todo.",
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleAddClick = () => {
    if (inputValue.trim() !== "") {
      setList([...list, inputValue]);
      setInputValue("");
    } else {
      alert("Enter something");
    }
  };

  const removeElem = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <>
      <header>
        <div className="contanir">
          <div className="contant">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="links">
              <Link to="/" className="firstlink" id="firstlink">
                Home
              </Link>
              <Link to="/about" className="seclink" id="seclink">
                About
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="contanir">
          <div className="contantMain">
            <div className="body">
              <h2 className="h">Simple ToDo App</h2>
              <p>This todo app for test design.</p>
            </div>
            <div className="input">
              <input
                id="get"
                className="get"
                type="text"
                placeholder="Write text here..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button className="btnadd" onClick={handleAddClick}>
                + Add New
              </button>
            </div>
            <div className="line"></div>
            <div className="list">
              <div id="list">
                {list.map((el, i) => (
                  <div key={i} className="onelist">
                    <div>{el}</div>
                    <button className="xbtn" onClick={() => removeElem(i)}>
                      <img src={x} alt="" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="Total">
                <p>
                  Total List: <span>{list.length}</span>
                </p>
              </div>
            </div>
          </div>

          <button onClick={handleAddClick} className="mobilebtnadd">
            + Add New
          </button>
        </div>
      </main>
    </>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Header() {
  return (
    <header>
      <img src={logo} width={100} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

function User(props) {
  // logic

  return (
    <div style={{ background: "green", margin: 5, padding: 5 }}>
      {props.text}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />

      <User text="Abc" />
      <User text="Def" />
      <User text="1234" />
      <User text="1234" />
      <User text="1234" />
      <User text="1234" />
      <User text="1234" />
    </div>
  );
}

export default App;

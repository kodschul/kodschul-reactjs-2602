import React from "react";
import { useState } from "react";
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
      {JSON.stringify(props)}
    </div>
  );
}

function App() {
  const [isDark, setDark] = useState(false);

  // let isDarkVar = true;

  const switchTheme = () => {
    // isDark = !isDark;
    setDark(!isDark);
  };

  return (
    <div className={isDark ? "dark" : "light"}>
      <Header />

      <button onClick={switchTheme}>Switch theme</button>

      <User text="Abc" avatar="http...." />
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

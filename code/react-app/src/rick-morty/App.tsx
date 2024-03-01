import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharactersPage from "./pages/Characters";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={CharactersPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Room from "./Room";
import Join from "./Join";
import "./index.css";
import Home from "./Home";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/room" exact element={<Room />} />
      <Route path="/join" exact element={<Join />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

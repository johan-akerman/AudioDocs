import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Room from "./Room";
import Join from "./Join";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/room" element={<Room />} />
      <Route path="/join" element={<Join />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

import React from "react";
import Navbar from "./components/Navbar";
import Editor from "./components/Editor";

export default function Room() {
  return (
    <div className="App bg-gray-100 flex flex-col h-screen justify-between">
      <Navbar />
      <Editor />
    </div>
  );
}

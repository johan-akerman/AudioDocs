import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import React from "react";
import { useState } from "react";

export default function Join() {
  const [value, setValue] = useState("");

  return (
    <div className="bg-purple md:py-96 py-12 h-screen">
      <h1 className="text-center text-6xl text-white pb-12">Clubhouse</h1>

      <div className="bg-white rounded-2xl pt-10 md:px-8 px-6 pb-8 text-left md:w-3/12 w-11/12 mx-auto">
        <input
          className="border-grey-light w-full p-3 rounded mb-4 focus:ring-primary focus:border-primary text-center border-black border-2 text-lg"
          type="text"
          placeholder="Username"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <div className="bg-dark text-white px-5 py-3 rounded-lg cursor-pointer text-center text-lg font-semibold">
          Enter
        </div>
      </div>
    </div>
  );
}

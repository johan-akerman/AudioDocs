import { faFontAwesomeFlag, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { useState } from "react";

export default function Join() {
  const [value, setValue] = useState("");

  return (
    <div className="bg-purple md:py-60 py-12 h-screen">
      <div className="md:w-3/12 w-11/12 text-center mb-8 mx-auto flex">
        <FontAwesomeIcon
          icon={faFontAwesomeFlag}
          className="mr-5 text-white text-5xl pt-1"
        />
        <h1 className="text-white text-6xl font-semibold">Clubhouse</h1>
      </div>

      <div className="bg-white rounded-lg p-4 md:w-3/12 w-11/12 mx-auto">
        <input
          className="border-grey-light w-full p-3 rounded mb-4 focus:ring-primary focus:border-primary text-center border-black border-2 text-lg font-semibold"
          type="text"
          placeholder="House PIN"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <div className="bg-dark text-white px-5 py-3 rounded-lg cursor-pointer text-center text-lg font-semibold">
          Enter
        </div>
      </div>

      <p className="fixed bottom-8 text-center left-0 right-0 ">
        Create your own room for FREE at ________
      </p>
    </div>
  );
}

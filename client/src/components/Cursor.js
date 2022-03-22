import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";

export default function Cursor({ client }) {
  return (
    <div
      className="fixed"
      style={{
        left: client.x,
        top: client.y,
      }}
    >
      <FontAwesomeIcon
        icon={faArrowPointer}
        className="text-green-500 text-xl"
      />
      <div className="ml-2 bg-green-500 text-white px-2 py-1 text-sm rounded-md">
        {client.id}
      </div>
    </div>
  );
}

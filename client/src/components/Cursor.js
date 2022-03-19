import React, { useEffect, useState } from "react";

export default function Cursor({ coordinates, name }) {
  return (
    <div
      className="fixed"
      style={{
        left: coordinates.x,
        top: coordinates.y,
      }}
    >
      <div className="bg-green-500 h-5 w-5 rounded-full"></div>
      <div className="ml-6 left-32 bg-green-500 text-white px-2 py-1 text-sm rounded-md">
        {name}
      </div>
    </div>
  );
}

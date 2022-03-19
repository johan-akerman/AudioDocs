import React, { useCallback, useEffect, useState } from "react";
import "quill/dist/quill.snow.css";
import { io } from "socket.io-client";
import Cursor from "./Cursor";

export default function Editor() {
  const [socket, setSocket] = useState();
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const s = io("http://localhost:3001");
    setSocket(s);
    return () => {
      s.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket == null) return;

    socket.on("moved", (arg) => {
      setCoordinates(arg);
    });
  }, [socket]);

  const moveMouse = (e) => {
    setCoordinates({ x: e.clientX, y: e.clientY });
    socket.emit("move", { x: coordinates.x, y: coordinates.y });
  };

  return (
    <div
      className="bg-white mx-auto w-full h-full shadow-lg p-12 rounded-sm"
      onMouseMove={(e) => moveMouse(e)}
    >
      <Cursor coordinates={coordinates} name="Johan" />
    </div>
  );
}

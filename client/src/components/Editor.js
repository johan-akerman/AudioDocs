import React, { useCallback, useEffect, useState } from "react";
import "quill/dist/quill.snow.css";
import { io } from "socket.io-client";
import Cursor from "./Cursor";

export default function Editor() {
  const [socket, setSocket] = useState();
  const [client, setClient] = useState();
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const s = io("http://localhost:3001");
    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket == null) return;

    socket.on("connected", (arg) => {
      setClient(arg);
    });

    socket.on("newConnection", (arg) => {
      if (client !== arg) {
        setClients([
          ...clients,
          {
            id: arg,
            x: 100,
            y: 100,
          },
        ]);
      }
    });

    socket.on("moved", (arg) => {
      setClients([
        {
          id: arg.id,
          x: arg.x,
          y: arg.y,
        },
      ]);
    });
  }, [socket]);

  const moveMouse = (e) => {
    socket.emit("move", { id: client, x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="bg-white mx-auto w-full h-full shadow-lg p-12 rounded-sm"
      onMouseMove={(e) => moveMouse(e)}
    >
      {clients?.map((client) => (
        <Cursor client={client} key={client.id} />
      ))}
    </div>
  );
}

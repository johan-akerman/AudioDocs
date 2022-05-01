import React, { useEffect, useState } from "react";
import "quill/dist/quill.snow.css";
import { io } from "socket.io-client";
import Cursor from "./Cursor";

export default function Editor() {
  const [socket, setSocket] = useState();
  const [client, setClient] = useState();
  const [clients, setClients] = useState([]);
  const [message, setMessage] = useState([
    {
      word: "hej",
      start: 0,
      end: 1,
    },
    {
      word: "på",
      start: 1,
      end: 2,
    },
    {
      word: "dig",
      start: 2,
      end: 3,
    },
  ]);

  const [text, setText] = useState("");

  useEffect(() => {
    const s = io("http://localhost:3001");
    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);

  useEffect(() => {
    let tmp = "";
    message.forEach((item) => (tmp += item.word + " "));
    setText(tmp);
  }, [message]);

  useEffect(() => {}, [text]);

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

    socket.on("wrote", (arg) => {
      setText(arg);
    });
  }, [socket]);

  const moveMouse = (e) => {
    socket.emit("move", { id: client, x: e.clientX, y: e.clientY });
  };

  const typed = (text) => {
    setText(text);
    socket.emit("typed", text);
  };

  return (
    <div
      className="bg-gray-200 mx-auto w-full h-full shadow-lg p-12 rounded-sm"
      onMouseMove={(e) => moveMouse(e)}
    >
      {clients?.map((client) => (
        <Cursor client={client} key={client.id} />
      ))}
    </div>
  );
}

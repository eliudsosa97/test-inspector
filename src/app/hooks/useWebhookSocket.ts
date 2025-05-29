import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export function useWebhookSocket() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const socket: Socket = io(
      "https://f08d-2806-2f0-54a0-f90f-c57b-423b-dbb2-ebc1.ngrok-free.app",
      {
        transports: ["websocket"], // fuerza websocket
      }
    );

    socket.on("connect", () => {
      console.log("✅ Connected to WebSocket");
    });

    socket.on("webhook:log", (payload) => {
      console.log("📡 New log data:", payload);
      setData(payload);
    });

    socket.on("disconnect", () => {
      console.log("❌ Disconnected from WebSocket");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return data;
}

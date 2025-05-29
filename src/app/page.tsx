"use client";
import { useWebhookSocket } from "./hooks/useWebhookSocket";

export default function LogsPage() {
  const data = useWebhookSocket();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Logs en tiempo real</h1>
      <pre className="bg-gray-800 text-white p-4 mt-4 rounded">
        {data ? JSON.stringify(data, null, 2) : "Esperando datos..."}
      </pre>
    </div>
  );
}

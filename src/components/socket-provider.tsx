"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { io as ClientIO } from "socket.io-client";
import { Socket } from "socket.io-client";

type SocketContextType = {
  socket: Socket | null;
  isConnected: boolean;
};

const SocketContext = createContext<SocketContextType>({
  socket: null,
  isConnected: false,
});

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.on("disconnect", async () => {
      setIsConnected(false);
    });
  }, []);

  useEffect(() => {
    fetch("/api/socket/io").then(() => {
      const socketInstance = new (ClientIO as any)(
        process.env.NEXT_PUBLIC_SITE_URL!,
        {
          path: "/api/socket/io",
          addTrailingSlash: false,
          transports: ["polling", "websocket"], // 안정적인 연결
          forceNew: true,
          withCredentials: true,
        }
      );

      socketInstance.on("connect", () => {
        console.log("✅ 소켓 연결됨");
        setIsConnected(true);
      });

      setSocket(socketInstance);
      return () => {
        socketInstance.disconnect();
      };
    });
  }, []);

  return (
    <SocketContext.Provider value={{ socket, isConnected }}>
      {children}
    </SocketContext.Provider>
  );
};

import { Server as NetServer } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import { Server as ServerIO } from "socket.io";
import { Socket } from "net";

export type NextApiResponseServerIo = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: ServerIO;
    };
  };
};

const ioHandler = (req: NextApiRequest, res: NextApiResponseServerIo) => {
  if (!res.socket.server.io) {
    const path = "/api/socket/io";
    const httpServer: NetServer = res.socket.server as any;
    const io = new ServerIO(httpServer, {
      path: path,
      addTrailingSlash: false,
    });

    io.on("connection", (socket) => {
      console.log("✅ 소켓 연결 성공:", socket.id);

      socket.on("disconnect", () => {
        console.log("❌ 소켓 연결 해제:", socket.id);
      });

      socket.on("join", (roomId) => {
        socket.join(roomId);
        console.log(`${socket.id} joined ${roomId}`);
      });

      socket.on("message", ({ roomId, text }) => {
        io.to(roomId).emit("message", { sender: socket.id, text });
      });
    });

    res.socket.server.io = io;
  }

  res.end();
};
export default ioHandler;

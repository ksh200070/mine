"use client";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSocket } from "@/components/socket-provider";
import LoadingDots from "../../components/LoadingDots";

interface message {
  userId: number;
  content: string;
}

const ChatPage = () => {
  const [messages, setMessages] = useState<message[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const { socket, isConnected } = useSocket();
  const [userId] = useState(+new Date());

  const containerRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // 스크롤이 맨 아래에 있는지 확인하는 함수
  const isScrolledToBottom = () => {
    const el = containerRef.current;
    if (!el) return false;
    return el.scrollHeight - el.scrollTop <= el.clientHeight + 5; // 오차 범위 5px
  };

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.on("message", (data: message) => {
      setMessages((messages) => [...messages, ...[data]]);
    });

    socket.emit("join"); // 예: "chat-123"

    if (isScrolledToBottom()) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    return () => {
      socket.off("message");
    };
  }, [socket, messages]);

  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await axios.post("/api/chat", {
      userId: userId,
      content: currentMessage,
    });
    setCurrentMessage("");
    console.log(userId);
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col rounded-xl border bg-card text-card-foreground shadow w-[300px] mx-auto h-[240px] pt-2 mb-6"
    >
      {!isConnected && (
        <div className="p-6 grid place-items-center h-[100%]">
          <LoadingDots />
        </div>
      )}
      {isConnected && (
        <>
          <div className="h-[100%] p-8 pt-0 overflow-scroll">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={
                    "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm " +
                    (message.userId !== userId
                      ? "bg-zinc-100"
                      : "ml-auto bg-blue-400 text-white")
                  }
                >
                  {message.content}
                </div>
              ))}
            </div>

            <div ref={bottomRef} />
          </div>
          <div className="flex items-center p-6 pt-0">
            <form className="flex w-full items-center space-x-2">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 flex-1"
              ></input>
              <button
                type="submit"
                onClick={(e) => sendMessage(e)}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white shadow hover:bg-primary/90 h-9 w-9"
              >
                전송
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatPage;

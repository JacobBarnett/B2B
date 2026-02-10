import React, { useState } from "react";
import {
  Send,
  AlertTriangle,
  Package,
  MessageSquare,
  Shield,
} from "lucide-react";

const ChatRoom = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Kokopelli",
      text: "Jewelry thief spotted near 5th!",
      type: "security",
    },
    {
      id: 2,
      user: "Step back in time",
      text: "Looking for watch parts.",
      type: "general",
    },
  ]);

  const [input, setInput] = useState("");
  const [msgType, setMsgType] = useState("general"); // State for urgency

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      user: "My Business (You)",
      text: input,
      type: msgType,
    };

    setMessages([...messages, newMessage]);
    setInput("");
    setMsgType("general"); // Reset to general after sending
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white flex flex-col p-4 space-y-4">
        <h1 className="text-xl font-bold border-b border-slate-700 pb-2">
          BizConnect
        </h1>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-red-400 p-2 hover:bg-slate-800 rounded cursor-pointer">
            <Shield size={18} /> Security
          </div>
          <div className="flex items-center gap-2 text-blue-400 p-2 hover:bg-slate-800 rounded cursor-pointer">
            <Package size={18} /> Inventory
          </div>
          <div className="flex items-center gap-2 text-green-400 p-2 hover:bg-slate-800 rounded cursor-pointer">
            <MessageSquare size={18} /> General
          </div>
        </div>
      </div>

      {/* Main Chat */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white p-4 shadow-sm font-bold text-gray-700">
          # Local-Business-Feed
        </header>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-3 rounded-lg shadow-sm border-l-4 bg-white ${msg.type === "security" ? "border-red-500" : "border-blue-500"}`}
            >
              <div className="flex justify-between font-bold text-xs mb-1">
                <span>{msg.user}</span>
                {msg.type === "security" && (
                  <span className="text-red-500 text-[10px] uppercase">
                    Urgent Alert
                  </span>
                )}
              </div>
              <p className="text-gray-800">{msg.text}</p>
            </div>
          ))}
        </div>

        <form
          onSubmit={sendMessage}
          className="p-4 bg-white border-t flex gap-2 items-center"
        >
          {/* Urgency Toggle */}
          <button
            type="button"
            onClick={() =>
              setMsgType(msgType === "general" ? "security" : "general")
            }
            className={`p-2 rounded-lg transition-colors ${msgType === "security" ? "bg-red-500 text-white" : "bg-gray-200 text-gray-600"}`}
            title="Toggle Security Alert"
          >
            <AlertTriangle size={20} />
          </button>

          <input
            className="flex-1 border p-2 rounded-full px-4 outline-none focus:ring-2 focus:ring-blue-400"
            placeholder={
              msgType === "security"
                ? "POST AN EMERGENCY ALERT..."
                : "Message neighbors..."
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;

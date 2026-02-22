import React, { useState } from "react";
import { Home as HomeIcon, MessageSquare, Shield, LogOut } from "lucide-react";
import Login from "./login";
import ChatRoom from "./ChatRoom";
import Home from "./Home"; // We'll create this next

function App() {
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState("home"); // 'home' or 'chat'

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

  const addMessage = (newMessage) => {
    setMessages((prev) => [...prev, newMessage]);
  };
  if (!user) {
    return <Login onLogin={(name) => setUser(name)} />;
  }

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* LEFT SIDEBAR - The Fixed Anchor */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col shrink-0">
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Shield className="text-blue-400" size={24} /> BizConnect
          </h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setCurrentView("home")}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition ${
              currentView === "home"
                ? "bg-blue-600 text-white"
                : "hover:bg-slate-800 text-slate-300"
            }`}
          >
            <HomeIcon size={20} /> Home
          </button>

          <button
            onClick={() => setCurrentView("chat")}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition ${
              currentView === "chat"
                ? "bg-blue-600 text-white"
                : "hover:bg-slate-800 text-slate-300"
            }`}
          >
            <MessageSquare size={20} /> Neighborhood Chat
          </button>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button
            onClick={() => setUser(null)}
            className="w-full flex items-center gap-3 p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* RIGHT SIDE CONTENT - The Dynamic Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {currentView === "home" ? (
          <Home user={user} messages={setMessages} setView={setCurrentView} />
        ) : (
          <ChatRoom
            currentUser={user}
            messages={messages}
            addMessage={addMessage}
          />
        )}
      </main>
    </div>
  );
}

export default App;

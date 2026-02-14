import React, { useState } from "react";
import Login from "./login";
import ChatRoom from "./ChatRoom";
import Home from "./Home"; // We'll create this next

function App() {
  const [user, setUser] = useState(null);
  const [currentView, setCurrentView] = useState("home"); // 'home' or 'chat'

  if (!user) {
    return <Login onLogin={(name) => setUser(name)} />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* This layout stays constant, only the middle changes */}
      <Home user={user} setView={setCurrentView} currentView={currentView} />

      {currentView === "chat" && <ChatRoom currentUser={user} />}
    </div>
  );
}

export default App;

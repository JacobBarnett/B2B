import React, { useState } from "react";
import ChatRoom from "./ChatRoom"; // Import the file we created
import Login from "./login";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (name) => {
    setUser(name);
  };

  return (
    <div className="App">
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <ChatRoom currentUser={user} />
      )}
    </div>
  );
}

export default App;

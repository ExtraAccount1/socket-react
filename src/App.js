import { Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import { ChatApp } from "./ChatApp";
import { ChatApp2 } from "./ChatApp2";
import { App2 } from "./App2";
import LoginPage from "./LoginPage";
import { useState } from "react";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState('');

  const handleLogin = (user, usersData) => {
    setUsername(user);
    setLoggedIn(true);
    setUsers(usersData); // Set the 'users' data in the state
  };
  
  return (
    <div className="App">
      <div>
        {!loggedIn ? (
          <LoginPage handleLogin={handleLogin} users={users} />
        ) : (
          <Chat username={username} users={users} />
        )}
      </div>
      {/* <Routes> */}
      {/* <Route path='/' element={<Chat />} /> */}
      {/* <Route path='/' element={<ChatApp />} /> */}
      {/* <Route path='/' element={<ChatApp2 />} /> */}
      {/* <Route path='/' element={<App2 />} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
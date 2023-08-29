import { useEffect, useState } from "react";

import "./App.css";
import { Home } from "./Home";
import { Routes, Route } from "react-router-dom";
import { Game } from "./Game";
import { Choice } from "./Choice";

function App() {
  const [userName, setUserName] = useState<string>("");
  const initialUser = JSON.parse(localStorage.getItem("user") || "{}");
  const [user, setUser] = useState<string>(initialUser);
  const [computerPlayer, setComputerPlayer] = useState("");

  let options = ["rock", "paper", "scissor"];

  function randomItem() {
    setComputerPlayer(options[Math.floor(Math.random() * options.length)]);
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            setUserName={setUserName}
            userName={userName}
            setUser={setUser}
            user={user}
          />
        }
      />
      <Route
        path="/game"
        element={<Game user={user} randomItem={randomItem} />}
      />
      <Route
        path="/game/:choice"
        element={<Choice computerPlayer={computerPlayer} user={user} />}
      />
    </Routes>
  );
}

export default App;

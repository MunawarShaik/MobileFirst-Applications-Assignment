import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Homepage from "./components/Homepage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      {!loggedIn ? <Login setLoggedIn={setLoggedIn} /> : <Homepage />}
    </div>
  );
}

export default App;

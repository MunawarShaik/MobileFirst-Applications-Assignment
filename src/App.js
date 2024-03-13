import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import { Route, Routes } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Stack className="App">
      <Routes>
        <Route
          path="/login"
          element={
            !loggedIn ? <Login setLoggedIn={setLoggedIn} /> : <Homepage />
          }
        ></Route>
        <Route path="/" element={loggedIn ? <Homepage /> : <Login />}></Route>
      </Routes>
    </Stack>
  );
}

export default App;

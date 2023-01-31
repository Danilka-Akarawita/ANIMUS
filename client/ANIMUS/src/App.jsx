import React from "react";
import Home from "./home-page/Home";
import Login from "./login-page/Login";
import GameAsset from "./components/GameAsset";

function App(props) {
  return (
    <div>
      <Login />
      <GameAsset />
    </div>
  );
}

export default App;

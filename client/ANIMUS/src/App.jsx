import React from "react";
import Home from "./home-page/Home";
import Login from "./login-page/Login";
import GameAsset from "./components/GameAsset";

function App(props) {
  return (
    <div>
      <Login />
      <GameAsset />
      <h1 className="text-sky-400">Welcome</h1>
    </div>
  );
}

export default App;

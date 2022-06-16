import "./Layout.scss";
import Header from "./components/Header";
import Main from "./components/Main";

import { Outlet } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="Layout">
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default App;

import "./Layout.scss";
import Header from "./components/Header";
import Main from "./components/Main";

import { Outlet } from "react-router-dom";
import React from "react";

function Layout({ onLogoClick = () => {} }) {
  return (
    <div className="Layout">
      <Header onLogoClick={onLogoClick} />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default Layout;

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

import { Outlet } from "react-router-dom";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surveyAnswersWorkshopStart: {
        anmeldung: "foobar",
        alter: 99,
      },
      surveyAnswersWorkshopEnd: {
        nicknameRemember: "alidata",
      },
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Main>
          <Outlet />
        </Main>
      </div>
    );
  }
}

export default App;

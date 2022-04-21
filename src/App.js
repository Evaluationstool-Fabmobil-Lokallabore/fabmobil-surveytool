import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default App;

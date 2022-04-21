import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import StartScreen from "./screens/0_Start";
import S01Anmeldung from "./screens/Workshop-Start/01_Anmeldung";
import S02Alter from "./screens/Workshop-Start/02_Alter";
import S03Postleitzahl from "./screens/Workshop-Start/03_Postleitzahl";
import S04Geschlecht from "./screens/Workshop-Start/04_Geschlecht";
import S05Besuch from "./screens/Workshop-Start/05_Besuch";
import S06Erwartungen from "./screens/Workshop-Start/06_Erwartungen";
import S07Interesse from "./screens/Workshop-Start/07_Interesse";
import S08Vorerfahrung from "./screens/Workshop-Start/08_Vorerfahrung";
import S09AnzahlTage from "./screens/Workshop-Start/09_AnzahlTage";
import S10Ort from "./screens/Workshop-Start/10_Ort";
import S11Werbung from "./screens/Workshop-Start/11_Werbung";
import S12Grund from "./screens/Workshop-Start/12_Grund";
import S13Nickname from "./screens/Workshop-Start/13_Nickname";
import S14Ende from "./screens/Workshop-Start/14_Ende";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<StartScreen />} />
          <Route path="anmeldung" element={<S01Anmeldung />} />
          <Route path="alter" element={<S02Alter />} />
          <Route path="postleitzahl" element={<S03Postleitzahl />} />
          <Route path="geschlecht" element={<S04Geschlecht />} />
          <Route path="besuch" element={<S05Besuch />} />
          <Route path="erwartungen" element={<S06Erwartungen />} />
          <Route path="interesse" element={<S07Interesse />} />
          <Route path="vorerfahrung" element={<S08Vorerfahrung />} />
          <Route path="anzahl-tage" element={<S09AnzahlTage />} />
          <Route path="ort" element={<S10Ort />} />
          <Route path="werbung" element={<S11Werbung />} />
          <Route path="grund" element={<S12Grund />} />
          <Route path="nickname" element={<S13Nickname />} />
          <Route path="ende" element={<S14Ende />} />
          <Route path="*" element={<p>There's nothing here!</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

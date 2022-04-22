import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
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
import E01NicknameRemember from "./screens/Workshop-Ende/01_NicknameRemember";
import E02Spass from "./screens/Workshop-Ende/02_Spass";
import E03Interesse from "./screens/Workshop-Ende/03_Interesse";
import E04Technologie from "./screens/Workshop-Ende/04_Technologie";
import E05Programme from "./screens/Workshop-Ende/05_Programme";
import E06Betreuung from "./screens/Workshop-Ende/06_Betreuung";
import E073DDruck from "./screens/Workshop-Ende/07_3DDruck";
import E08VR from "./screens/Workshop-Ende/08_VR";
import E09Laser from "./screens/Workshop-Ende/09_Laser";
import E103DModelling from "./screens/Workshop-Ende/10_3DModelling";
import E11Erwartungen from "./screens/Workshop-Ende/11_Erwartungen";
import E12NextTime from "./screens/Workshop-Ende/12_NextTime";
import E13Atmo from "./screens/Workshop-Ende/13_Atmo";
import E14Angebot from "./screens/Workshop-Ende/14_Angebot";
import E15Engagieren from "./screens/Workshop-Ende/15_Engagieren";
import E16AnythingElse from "./screens/Workshop-Ende/16_AnythingElse";
import E17Ende from "./screens/Workshop-Ende/17_Ende";

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
          <Route path="nickname-create" element={<S13Nickname />} />
          <Route path="ende" element={<S14Ende />} />
          <Route path="nickname2" element={<E01NicknameRemember />} />
          <Route path="spass" element={<E02Spass />} />
          <Route path="interesse2" element={<E03Interesse />} />
          <Route path="technologie" element={<E04Technologie />} />
          <Route path="programme" element={<E05Programme />} />
          <Route path="betreuung" element={<E06Betreuung />} />
          <Route path="3D-Druck" element={<E073DDruck />} />
          <Route path="vr" element={<E08VR />} />
          <Route path="laser" element={<E09Laser />} />
          <Route path="3D-Modelling" element={<E103DModelling />} />
          <Route path="erwartungen2" element={<E11Erwartungen />} />
          <Route path="next-time" element={<E12NextTime />} />
          <Route path="atmo" element={<E13Atmo />} />
          <Route path="angebot" element={<E14Angebot />} />
          <Route path="engagieren" element={<E15Engagieren />} />
          <Route path="anything-else" element={<E16AnythingElse />} />
          <Route path="ende2" element={<E17Ende />} />
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

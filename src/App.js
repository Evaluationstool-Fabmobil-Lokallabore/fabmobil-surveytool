import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import StartScreen from "./screens/0_Start";
import S01Anmeldung from "./screens/Workshop-Anfang/01_Anmeldung";
import S02Alter from "./screens/Workshop-Anfang/02_Alter";
import S03Postleitzahl from "./screens/Workshop-Anfang/03_Postleitzahl";
import S04Geschlecht from "./screens/Workshop-Anfang/04_Geschlecht";
import S05Besuch from "./screens/Workshop-Anfang/05_Besuch";
import S06Erwartungen from "./screens/Workshop-Anfang/06_Erwartungen";
import S07Interesse from "./screens/Workshop-Anfang/07_Interesse";
import S08Vorerfahrung from "./screens/Workshop-Anfang/08_Vorerfahrung";
import S09AnzahlTage from "./screens/Workshop-Anfang/09_AnzahlTage";
import S10Ort from "./screens/Workshop-Anfang/10_Ort";
import S11Werbung from "./screens/Workshop-Anfang/11_Werbung";
import S12Grund from "./screens/Workshop-Anfang/12_Grund";
import S13Nickname from "./screens/Workshop-Anfang/13_Nickname";
import S14Ende from "./screens/Workshop-Anfang/14_Ende";
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surveyAnswersWorkshopStart: {},
      surveyAnswersWorkshopEnd: {},
    };
  }

  logAnswer(questionId, answer) {
    this.setState({
      ...this.state,
      surveyAnswersWorkshopStart: {
        ...this.state.surveyAnswersWorkshopStart,
        [questionId]: answer,
      },
    });
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div>{JSON.stringify(this.state)}</div>
                  <Layout />
                </>
              }
            >
              <Route path="" element={<StartScreen />} />
              <Route path="losgehts/anmeldung" element={<S01Anmeldung />} />
              <Route
                path="losgehts/alter"
                element={
                  <S02Alter
                    onSubmit={(data) => {
                      this.logAnswer("alter", data);
                    }}
                  />
                }
              />
              <Route
                path="losgehts/postleitzahl"
                element={
                  <S03Postleitzahl
                    onSubmit={(data) => {
                      this.logAnswer("postleitzahl", data);
                    }}
                  />
                }
              />
              <Route path="losgehts/geschlecht" element={<S04Geschlecht />} />
              <Route path="losgehts/besuch" element={<S05Besuch />} />
              <Route path="losgehts/erwartungen" element={<S06Erwartungen />} />
              <Route path="losgehts/interesse" element={<S07Interesse />} />
              <Route
                path="losgehts/vorerfahrung"
                element={<S08Vorerfahrung />}
              />
              <Route path="losgehts/anzahl-tage" element={<S09AnzahlTage />} />
              <Route path="losgehts/ort" element={<S10Ort />} />
              <Route path="losgehts/werbung" element={<S11Werbung />} />
              <Route path="losgehts/grund" element={<S12Grund />} />
              <Route path="losgehts/nickname" element={<S13Nickname />} />
              <Route path="losgehts/ende" element={<S14Ende />} />
              <Route
                path="wiewars/nickname"
                element={<E01NicknameRemember />}
              />
              <Route path="wiewars/spass" element={<E02Spass />} />
              <Route path="wiewars/interesse" element={<E03Interesse />} />
              <Route path="wiewars/technologie" element={<E04Technologie />} />
              <Route path="wiewars/programme" element={<E05Programme />} />
              <Route path="wiewars/betreuung" element={<E06Betreuung />} />
              <Route path="wiewars/3D-Druck" element={<E073DDruck />} />
              <Route path="wiewars/vr" element={<E08VR />} />
              <Route path="wiewars/laser" element={<E09Laser />} />
              <Route path="wiewars/3D-Modelling" element={<E103DModelling />} />
              <Route path="wiewars/erwartungen" element={<E11Erwartungen />} />
              <Route path="wiewars/next-time" element={<E12NextTime />} />
              <Route path="wiewars/atmo" element={<E13Atmo />} />
              <Route path="wiewars/angebot" element={<E14Angebot />} />
              <Route path="wiewars/engagieren" element={<E15Engagieren />} />
              <Route
                path="wiewars/anything-else"
                element={<E16AnythingElse />}
              />
              <Route path="wiewars/ende" element={<E17Ende />} />
              <Route path="*" element={<p>There's nothing here!</p>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;

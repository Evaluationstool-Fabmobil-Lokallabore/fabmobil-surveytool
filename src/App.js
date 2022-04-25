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
      surveyAnswersWorkshopStart: {
        alter: "0-12",
        postleitzahl: "9999",
        geschlecht: null,
        besuch: "noch nie",
        erwartungen: "freitextfreitext",
        anzahlTage: "4",
      },
      surveyAnswersWorkshopEnd: {},
    };
  }

  logAnswerWorkshopStart(questionId, answer) {
    this.setState({
      ...this.state,
      surveyAnswersWorkshopStart: {
        ...this.state.surveyAnswersWorkshopStart,
        [questionId]: answer,
      },
    });
  }

  logAnswerWorkshopEnd(questionId, answer) {
    this.setState({
      ...this.state,
      surveyAnswersWorkshopEnd: {
        ...this.state.surveyAnswersWorkshopEnd,
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
                      this.logAnswerWorkshopStart("alter", data);
                    }}
                    data={this.state.surveyAnswersWorkshopStart.alter}
                  />
                }
              />
              <Route
                path="losgehts/postleitzahl"
                element={
                  <S03Postleitzahl
                    onSubmit={(data) => {
                      this.logAnswerWorkshopStart("postleitzahl", data);
                    }}
                    data={this.state.surveyAnswersWorkshopStart.postleitzahl}
                  />
                }
              />
              <Route
                path="losgehts/geschlecht"
                element={
                  <S04Geschlecht
                    onSubmit={(data) => {
                      this.logAnswerWorkshopStart("geschlecht", data);
                    }}
                    data={this.state.surveyAnswersWorkshopStart.geschlecht}
                  />
                }
              />
              <Route
                path="losgehts/besuch"
                element={
                  <S05Besuch
                    onSubmit={(data) => {
                      this.logAnswerWorkshopStart("besuch", data);
                    }}
                    data={this.state.surveyAnswersWorkshopStart.besuch}
                  />
                }
              />
              <Route
                path="losgehts/erwartungen"
                element={
                  <S06Erwartungen
                    onSubmit={(data) => {
                      this.logAnswerWorkshopStart("erwartungen", data);
                    }}
                    data={this.state.surveyAnswersWorkshopStart.erwartungen}
                  />
                }
              />
              <Route
                path="losgehts/interesse"
                element={
                  <S07Interesse
                    onSubmit={(data) => {
                      this.logAnswerWorkshopStart("interesse", data);
                    }}
                    data={this.state.surveyAnswersWorkshopStart.interesse}
                  />
                }
              />
              <Route
                path="losgehts/vorerfahrung"
                element={
                  <S08Vorerfahrung
                    onSubmit={(data) => {
                      this.logAnswerWorkshopStart("vorerfahrung", data);
                    }}
                    data={this.state.surveyAnswersWorkshopStart.vorerfahrung}
                  />
                }
              />
              <Route
                path="losgehts/anzahl-tage"
                element={
                  <S09AnzahlTage
                    onSubmit={(data) => {
                      this.logAnswerWorkshopStart("anzahlTage", data);
                    }}
                    data={this.state.surveyAnswersWorkshopStart.anzahlTage}
                  />
                }
              />
              <Route
                path="losgehts/ort"
                element={
                  <S10Ort
                    onSubmit={(data) => {
                      this.logAnswerWorkshopStart("ort", data);
                    }}
                    data={this.state.surveyAnswersWorkshopStart.ort}
                  />
                }
              />
              <Route
                path="losgehts/werbung"
                element={
                  <S11Werbung
                    onSubmit={(data) => {
                      this.logAnswerWorkshopStart("werbung", data);
                    }}
                    data={this.state.surveyAnswersWorkshopStart.werbung}
                  />
                }
              />
              <Route
                path="losgehts/grund"
                element={
                  <S12Grund
                    onSubmit={(data) => {
                      this.logAnswerWorkshopStart("grund", data);
                    }}
                    data={this.state.surveyAnswersWorkshopStart.grund}
                  />
                }
              />
              <Route
                path="losgehts/nickname"
                element={
                  <S13Nickname
                    onSubmit={(data) => {
                      this.logAnswerWorkshopStart("nickname", data);
                    }}
                    data={this.state.surveyAnswersWorkshopStart.nickname}
                  />
                }
              />
              <Route path="losgehts/ende" element={<S14Ende />} />
              <Route
                path="wiewars/nickname"
                element={
                  <E01NicknameRemember
                    onSubmit={(data) => {
                      this.logAnswerWorkshopEnd("nickname", data);
                    }}
                    data={this.state.surveyAnswersWorkshopEnd.nickname}
                  />
                }
              />
              <Route
                path="wiewars/spass"
                element={
                  <E02Spass
                    onSubmit={(data) => {
                      this.logAnswerWorkshopEnd("spass", data);
                    }}
                    data={this.state.surveyAnswersWorkshopEnd.spass}
                  />
                }
              />
              <Route
                path="wiewars/interesse"
                element={
                  <E03Interesse
                    onSubmit={(data) => {
                      this.logAnswerWorkshopEnd("interesse", data);
                    }}
                    data={this.state.surveyAnswersWorkshopEnd.interesse}
                  />
                }
              />
              <Route
                path="wiewars/technologie"
                element={
                  <E04Technologie
                    onSubmit={(data) => {
                      this.logAnswerWorkshopEnd("technologie", data);
                    }}
                    data={this.state.surveyAnswersWorkshopEnd.technologie}
                  />
                }
              />
              <Route
                path="wiewars/programme"
                element={
                  <E05Programme
                    onSubmit={(data) => {
                      this.logAnswerWorkshopEnd("programme", data);
                    }}
                    data={this.state.surveyAnswersWorkshopEnd.programme}
                  />
                }
              />
              <Route
                path="wiewars/betreuung"
                element={
                  <E06Betreuung
                    onSubmit={(data) => {
                      this.logAnswerWorkshopEnd("betreuung", data);
                    }}
                    data={this.state.surveyAnswersWorkshopEnd.betreuung}
                  />
                }
              />
              <Route
                path="wiewars/3D-Druck"
                element={
                  <E073DDruck
                    onSubmit={(data) => {
                      this.logAnswerWorkshopEnd("DreiDDRuck", data);
                    }}
                    data={this.state.surveyAnswersWorkshopEnd.DreiDDRuck}
                  />
                }
              />
              <Route
                path="wiewars/vr"
                element={
                  <E08VR
                    onSubmit={(data) => {
                      this.logAnswerWorkshopEnd("vr", data);
                    }}
                    data={this.state.surveyAnswersWorkshopEnd.vr}
                  />
                }
              />
              <Route
                path="wiewars/laser"
                element={
                  <E09Laser
                    onSubmit={(data) => {
                      this.logAnswerWorkshopEnd("laser", data);
                    }}
                    data={this.state.surveyAnswersWorkshopEnd.laser}
                  />
                }
              />
              <Route
                path="wiewars/3D-Modelling"
                element={
                  <E103DModelling
                    onSubmit={(data) => {
                      this.logAnswerWorkshopEnd("DreiDModelling", data);
                    }}
                    data={this.state.surveyAnswersWorkshopEnd.DreiDModelling}
                  />
                }
              />
              <Route
                path="wiewars/erwartungen"
                element={
                  <E11Erwartungen
                    onSubmit={(data) => {
                      this.logAnswerWorkshopEnd("erwartungen", data);
                    }}
                    data={this.state.surveyAnswersWorkshopEnd.erwartungen}
                  />
                }
              />
              <Route
                path="wiewars/next-time"
                element={
                  <E12NextTime
                    onSubmit={(data) => {
                      this.logAnswerWorkshopEnd("nextTime", data);
                    }}
                    data={this.state.surveyAnswersWorkshopEnd.nextTime}
                  />
                }
              />
              <Route
                path="wiewars/atmo"
                element={
                  <E13Atmo
                    onSubmit={(data) => {
                      this.logAnswerWorkshopEnd("atmo", data);
                    }}
                    data={this.state.surveyAnswersWorkshopEnd.atmo}
                  />
                }
              />
              <Route
                path="wiewars/angebot"
                element={
                  <E14Angebot
                    onSubmit={(data) => {
                      this.logAnswerWorkshopEnd("angebot", data);
                    }}
                    data={this.state.surveyAnswersWorkshopEnd.angebot}
                  />
                }
              />
              <Route
                path="wiewars/engagieren"
                element={
                  <E15Engagieren
                    onSubmit={(data) => {
                      this.logAnswerWorkshopEnd("engagieren", data);
                    }}
                    data={this.state.surveyAnswersWorkshopEnd.engagieren}
                  />
                }
              />
              <Route
                path="wiewars/anything-else"
                element={
                  <E16AnythingElse
                    onSubmit={(data) => {
                      this.logAnswerWorkshopEnd("anythingElse", data);
                    }}
                    data={this.state.surveyAnswersWorkshopEnd.anythingElse}
                  />
                }
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

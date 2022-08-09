import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import StartScreen from "./screens/0_Start";
import DataExportScreen from "./screens/X_Data-Export";
import FirebaseClient from "./firebase/client";
import SURVEY_WORKSHOPSTART from "./constants/survey-workshopstart.js";
import SURVEY_WORKSHOPEND from "./constants/survey-workshopend.js";

function reformatSurveyData(surveyData) {
  const geschlecht = surveyData.geschlecht;
  let geschlechtReformatted = [];
  if (!geschlecht) return surveyData;
  if (!geschlecht.predefinedValues || geschlecht.predefinedValues.length > 0) {
    geschlechtReformatted = [...geschlecht.predefinedValues];
  }
  if (geschlecht.freeValue !== undefined) {
    geschlechtReformatted.push(geschlecht.freeValue);
  }
  return { ...surveyData, geschlecht: geschlechtReformatted };
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.firebaseClient = new FirebaseClient();
    this.state = {
      surveyAnswersWorkshopStart: {},
      surveyAnswersWorkshopEnd: {},
    };
  }

  resetSurveyData() {
    this.setState({
      surveyAnswersWorkshopStart: {},
      surveyAnswersWorkshopEnd: {},
    });
  }

  logAnswerWorkshopStart(questionId, answer) {
    this.setState(
      {
        ...this.state,
        surveyAnswersWorkshopStart: {
          ...this.state.surveyAnswersWorkshopStart,
          [questionId]: answer,
        },
      },
      () => {
        console.log(this.state);
      }
    );
  }

  logAnswerWorkshopEnd(questionId, answer) {
    this.setState(
      {
        ...this.state,
        surveyAnswersWorkshopEnd: {
          ...this.state.surveyAnswersWorkshopEnd,
          [questionId]: answer,
        },
      },
      () => {
        console.log(this.state);
      }
    );
  }

  submitAllWorkshopStartAnswers() {
    const reformattedSurveyData = reformatSurveyData(
      this.state.surveyAnswersWorkshopStart
    );
    const data = {
      ...reformattedSurveyData,
      date: new Date().toLocaleString(),
    };
    console.log("submitted data", data);
    this.firebaseClient
      .postAnswersWorkshopStart(data)
      .catch((err) => alert("Etwas ist schief gelaufen.."));
  }

  submitAllWorkshopEndAnswers() {
    const data = {
      ...this.state.surveyAnswersWorkshopEnd,
      date: new Date().toLocaleString(),
    };
    console.log("submitted data", data);
    this.firebaseClient
      .postAnswersWorkshopEnd(data)
      .catch((err) => alert("Etwas ist schief gelaufen.."));
  }

  onFinalSubmitWorkshopStart() {
    this.submitAllWorkshopStartAnswers();
    this.resetSurveyData();
  }

  onFinalSubmitWorkshopEnd() {
    this.submitAllWorkshopEndAnswers();
    this.resetSurveyData();
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout
                  onLogoClick={() => {
                    this.resetSurveyData();
                  }}
                />
              }
            >
              <Route path="" element={<StartScreen />} />

              {SURVEY_WORKSHOPSTART.surveyItems.map((item) => (
                <Route
                  key={item.questionId}
                  path={`${SURVEY_WORKSHOPSTART.baseUrl}/${item.questionId}`}
                  element={
                    <item.screenComponent
                      onSubmit={(data) => {
                        this.logAnswerWorkshopStart(item.questionId, data);
                      }}
                      data={
                        this.state.surveyAnswersWorkshopStart[item.questionId]
                      }
                      onFinalSubmit={
                        item.isFinal &&
                        (() => this.onFinalSubmitWorkshopStart())
                      }
                    ></item.screenComponent>
                  }
                />
              ))}

              {SURVEY_WORKSHOPEND.surveyItems.map((item, i) => (
                <Route
                  key={item.questionId}
                  path={`${SURVEY_WORKSHOPEND.baseUrl}/${item.questionId}`}
                  element={
                    <item.screenComponent
                      onSubmit={(data) => {
                        this.logAnswerWorkshopEnd(item.questionId, data);
                      }}
                      data={
                        this.state.surveyAnswersWorkshopEnd[item.questionId]
                      }
                      onFinalSubmit={
                        item.isFinal && (() => this.onFinalSubmitWorkshopEnd())
                      }
                    ></item.screenComponent>
                  }
                />
              ))}

              <Route path="*" element={<p>There's nothing here!</p>} />
            </Route>
            <Route path="/data-export" element={<DataExportScreen />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;

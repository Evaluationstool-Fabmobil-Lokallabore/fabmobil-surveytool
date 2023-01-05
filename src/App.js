import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import StartScreen from "./screens/0_Start";
import DataExportScreen from "./screens/X_Data-Export";
import FirebaseClient from "./firebase/client";
import SURVEY_WORKSHOPSTART from "./constants/survey-workshopstart.js";
import SURVEY_WORKSHOPEND from "./constants/survey-workshopend.js";
import AlertLayer from "./AlertLayer";

function reformatSurveyData(surveyData) {
  console.log(surveyData);
  const geschlecht = surveyData.geschlecht;
  let geschlechtReformatted = [];
  if (!geschlecht) return surveyData;
  if (geschlecht.predefinedValues && geschlecht.predefinedValues.length > 0) {
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
      error: null,
    };
  }

  reportError(errorCode) {
    this.setState({ ...this.state, error: errorCode });
  }

  clearError() {
    this.setState({ ...this.state, error: null });
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
        console.log("log answer workshop start", this.state);
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
      date: new Date().toISOString(),
    };
    console.log("submitted data", data);
    this.firebaseClient
      .postAnswersWorkshopStart(data)
      .catch((err) => alert("Etwas ist schief gelaufen.."));
  }

  submitAllWorkshopEndAnswers() {
    const data = {
      ...this.state.surveyAnswersWorkshopEnd,
      date: new Date().toISOString(),
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

  async createNewUser() {
    const { nickname, geburtstag } = this.state.surveyAnswersWorkshopStart;
    const userID = this.firebaseClient.createUserID(nickname, geburtstag);

    const doesExist = await this.firebaseClient.userDoesExist(userID);
    if (doesExist) {
      this.reportError("USER_EXISTS");
      throw Error("User exists");
    } else {
      await this.firebaseClient.postUser(userID);
      this.logAnswerWorkshopStart("userID", userID); //include ID in submission answers
    }
  }

  render() {
    return (
      <>
        <AlertLayer
          error={this.state.error}
          onCloseClick={() => this.clearError()}
          onAbandonConfirmClick={() => {
            this.clearError();
            this.resetSurveyData();
            window.location = "/";
          }}
        />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout
                  onLogoClick={() => {
                    if (window.location.pathname !== "/") {
                      this.reportError("ABANDON");
                    }
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
                      onNicknameSubmit={() => this.createNewUser()}
                      onFinalSubmit={() => this.onFinalSubmitWorkshopStart()}
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
                      onLogin={(nickname, geburtstag) =>
                        this.logAnswerWorkshopEnd(
                          "userID",
                          this.firebaseClient.createUserID(nickname, geburtstag)
                        )
                      }
                      onFinalSubmit={
                        item.isFinal && (() => this.onFinalSubmitWorkshopEnd())
                      }
                      firebaseClient={this.firebaseClient}
                      reportError={(errCode) => this.reportError(errCode)}
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

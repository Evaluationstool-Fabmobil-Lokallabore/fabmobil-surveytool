import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import StartScreen from "./screens/0_Start";
import SURVEY_WORKSHOPSTART from "./constants/survey-workshopstart.js";
import SURVEY_WORKSHOPEND from "./constants/survey-workshopend.js";
import FirebaseClient from "./firebase/client";

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
    this.setState({
      ...this.state,
      surveyAnswersWorkshopStart: {
        ...this.state.surveyAnswersWorkshopStart,
        [questionId]: answer,
      },
    });
    console.log(this.state);
  }

  logAnswerWorkshopEnd(questionId, answer) {
    this.setState({
      ...this.state,
      surveyAnswersWorkshopEnd: {
        ...this.state.surveyAnswersWorkshopEnd,
        [questionId]: answer,
      },
    });
    console.log(this.state);
  }

  submitAllWorkshopStartAnswers() {
    const data = {
      ...this.state.surveyAnswersWorkshopStart,
      date: new Date().toLocaleString(),
    };
    console.log("submitted data", data);
    firebaseClient.postAnswersWorkshopStart(data);
  }

  submitAllWorkshopEndAnswers() {
    const data = {
      ...this.state.surveyAnswersWorkshopEnd,
      date: new Date().toLocaleString(),
    };
    console.log("submitted data", data);
    firebaseClient.postAnswersWorkshopEnd(data);
  }

  onFinalSubmitWorkshopStart() {
    this.submitAllWorkshopStartAnswers();
  }

  onFinalSubmitWorkshopEnd() {
    this.submitAllWorkshopEndAnswers();
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
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
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;

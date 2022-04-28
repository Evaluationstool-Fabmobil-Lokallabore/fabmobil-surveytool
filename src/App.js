import React from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import StartScreen from "./screens/0_Start";
import SURVEY_WORKSHOPSTART from "./constants/survey-workshopstart.js";
import SURVEY_WORKSHOPEND from "./constants/survey-workshopend.js";

const DUMMY_DATABASE = {
  WORKSHOP_START:
    "https://sheet.best/api/sheets/8a8c4c58-adc0-4e1d-a766-ab7e57dd690c",
  WORKSHOP_END:
    "https://sheet.best/api/sheets/9c60d472-68aa-432c-bd82-6fc526c2624c",
};

class App extends React.Component {
  constructor(props) {
    super(props);
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

  submitAllAnswers(surveyType) {
    const url =
      surveyType === "workshopStart"
        ? DUMMY_DATABASE.WORKSHOP_START
        : DUMMY_DATABASE.WORKSHOP_END;
    const surveyData =
      surveyType === "workshopStart"
        ? this.state.surveyAnswersWorkshopStart
        : this.state.surveyAnswersWorkshopEnd;
    const data = { ...surveyData, date: new Date().toLocaleString() };
    console.log("submitted data", data);
    axios.post(url, data).then((response) => {
      console.log("response", response);
      this.resetSurveyData();
    });
  }

  onFinalSubmitWorkshopStart() {
    this.submitAllAnswers("workshopStart");
  }

  onFinalSubmitWorkshopEnd() {
    this.submitAllAnswers("workshopEnd");
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

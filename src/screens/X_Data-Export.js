import { useState } from "react";
import surveyWorkshopStart from "../constants/survey-workshopstart";
import surveyWorkshopEnd from "../constants/survey-workshopend";

const surveyWorkshopStartQuestionIds = surveyWorkshopStart.surveyItems.map(
  (item) => item.questionId
);
const surveyWorkshopEndQuestionIds = surveyWorkshopEnd.surveyItems.map(
  (item) => item.questionId
);

function normalizeWithAllKeys(dataRow, surveyType) {
  const questionIds =
    surveyType === "start"
      ? surveyWorkshopStartQuestionIds
      : surveyWorkshopEndQuestionIds;
  let normalizedDataRow = { date: escapeValue(dataRow["date"]) };
  questionIds.forEach((questionId) => {
    normalizedDataRow[questionId] = escapeValue(dataRow[questionId] || "");
  });
  return normalizedDataRow;
}

function escapeValue(val) {
  console.log(typeof val);
  let escaped = val;
  if (typeof val === "string") {
    escaped = val.replace(/,/g, "+");
  }
  if (Array.isArray(val)) {
    escaped = val.join("+");
  }
  return escaped;
}

function convertToCsv(data) {
  const questionIds = Object.keys(data[0]);
  const csvFileHeading = "data:text/csv;charset=utf-8,";
  const heading = questionIds.join(",");
  const body = data.map((row) => Object.values(row).join(",")).join("\r\n");
  return [csvFileHeading, heading, body].join("\r\n");
}

function Screen() {
  const [error, setError] = useState(false);
  const [info, setInfo] = useState("");

  const onFileChange = (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      const content = e.target.result;
      const data = JSON.parse(content);
      console.log("parsed data", data);
      const dataWsStart = data["answersWorkshopStart"];
      const dataWsEnd = data["answersWorkshopEnd"];
      try {
        const WsStartReformatted = Object.keys(dataWsStart)
          .map((fireBaseResponseId) => ({
            id: fireBaseResponseId,
            ...dataWsStart[fireBaseResponseId],
          }))
          .map((dataRow) => normalizeWithAllKeys(dataRow, "start"));

        const WsEndReformatted = Object.keys(dataWsEnd)
          .map((fireBaseResponseId) => ({
            id: fireBaseResponseId,
            ...dataWsEnd[fireBaseResponseId],
          }))
          .map((dataRow) => normalizeWithAllKeys(dataRow, "end"));

        setInfo(
          `Survey "Workshop Start": ${WsStartReformatted.length} entries. Survey "Workshop End":  ${WsEndReformatted.length}  entries.`
        );

        const fileWsStart = convertToCsv(WsStartReformatted);
        const linkWsStart = document.createElement("a");
        linkWsStart.setAttribute("href", encodeURI(fileWsStart));
        linkWsStart.setAttribute("download", "Workshop-Start.csv");
        document.body.appendChild(linkWsStart);
        linkWsStart.click();

        const fileWsEnd = convertToCsv(WsEndReformatted);
        const linkWsEnd = document.createElement("a");
        linkWsEnd.setAttribute("href", encodeURI(fileWsEnd));
        linkWsEnd.setAttribute("download", "Workshop-End.csv");
        document.body.appendChild(linkWsEnd);
        linkWsEnd.click();
      } catch (e) {
        console.error(e);
        setError(JSON.stringify(e));
      }
    };
    fileReader.readAsText(file, "UTF-8");
  };
  return (
    <div className="DataExportScreen">
      <h1>Data export</h1>
      <p>Upload JSON here:</p>
      <input type="file" onChange={onFileChange} />
      {error && (
        <div style={{ color: "red" }}>
          An error occured. <small>{error}</small>
        </div>
      )}
      <div>
        <p>{info}</p>
      </div>
    </div>
  );
}

export default Screen;

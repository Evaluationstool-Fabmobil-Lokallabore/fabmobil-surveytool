import { useState } from "react";
import arrToCsv from "../helpers/arrToCsv";
import surveyWorkshopStart from "../constants/survey-workshopstart";
import surveyWorkshopEnd from "../constants/survey-workshopend";

const fileReader = new FileReader();

const COLUMNS = {
  workshopStart: [
    "date",
    ...surveyWorkshopStart.surveyItems.map((item) => item.questionId),
  ],
  workshopEnd: [
    "date",
    ...surveyWorkshopEnd.surveyItems.map((item) => item.questionId),
  ],
};

function objToArr(data) {
  return Object.keys(data).map((key) => ({
    id: key,
    ...data[key],
  }));
}

function downloadCsv(csvData, filePath) {
  const link = document.createElement("a");
  const data = "data:text/csv;charset=utf-8," + csvData;
  link.setAttribute("href", encodeURI(data));
  link.setAttribute("download", filePath);
  document.body.appendChild(link);
  link.click();
}

function handleFileUpload(e, setInfo, setError) {
  try {
    const content = e.target.result;
    const data = JSON.parse(content);

    const dataWorkshopStart = objToArr(data.answersWorkshopStart);
    const dataWorkshopEnd = objToArr(data.answersWorkshopEnd);
    const CsvWsStart = arrToCsv(dataWorkshopStart, COLUMNS.workshopStart);
    const CsvWsEnd = arrToCsv(dataWorkshopEnd, COLUMNS.workshopEnd);

    downloadCsv(CsvWsStart, "Workshop-Start.csv");
    downloadCsv(CsvWsEnd, "Workshop-End.csv");
    setInfo(
      "Success! Check the Download folder of your browser for 2 files with the name Workshop-start.csv and Workshop-End.csv"
    );
  } catch (e) {
    console.error(e);
    setError(JSON.stringify(e));
  }
}

function Screen() {
  const [error, setError] = useState(false);
  const [info, setInfo] = useState("");

  const onFileChange = (event) => {
    const file = event.target.files[0];
    fileReader.onload = function (e) {
      handleFileUpload(e, setInfo, setError);
    };
    fileReader.readAsText(file, "UTF-8");
  };
  return (
    <div className="DataExportScreen">
      <h1>Data export (JSON to CSV)</h1>
      <p>Upload JSON here:</p>
      <input type="file" onChange={onFileChange} />
      {error && (
        <div style={{ color: "red" }}>
          An error occured. Check the browser devtools console for more
          information.
        </div>
      )}
      <div>
        <p>{info}</p>
      </div>
    </div>
  );
}

export default Screen;

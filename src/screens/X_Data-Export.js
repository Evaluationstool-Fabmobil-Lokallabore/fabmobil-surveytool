import { useState } from "react";
import arrToCsv from "../helpers/arrToCsv";
import doData from "../data-analysis/script";
import collectAllKeyNames from "../helpers/collectAllKeyNames";

const fileReader = new FileReader();

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

    const result = doData(data);
    const sortedHeaderKeys = collectAllKeyNames(result).sort().reverse(); //naive: START_prefixed before END_prefixed

    const csv = arrToCsv(result, sortedHeaderKeys);
    downloadCsv(csv, "fabmobil-data.csv");
    setInfo(
      "Success! Check the Download folder of your browser for a file named fabmobil-data.csv"
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

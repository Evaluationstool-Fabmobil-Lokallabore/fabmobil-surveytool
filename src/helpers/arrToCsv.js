const DELIMITER = ",";

function convertToStringable(el) {
  //convert data objects into something useful for the reader
  let str = "";
  if (Array.isArray(el)) {
    str = `${el}`; //built-in is fine for our case
  } else if (typeof el === "object") {
    str = JSON.stringify(el);
  } else {
    str = String(el);
  }
  str.replaceAll(DELIMITER, ";");
  str.replaceAll("#", "{HASH}"); //a hash (#) in the data cuts off the csv file triggers the download 🙈
  return str;
}

const arrToCsv = (arr, columns, delimiter = DELIMITER) =>
  [
    columns.join(delimiter),
    ...arr.map((obj) =>
      columns.reduce(
        (acc, key) =>
          `${acc}${!acc.length ? "" : delimiter}"${
            !obj[key] ? "" : convertToStringable(obj[key])
          }"`,
        ""
      )
    ),
  ].join("\n");

//TODO escape quotes?

export default arrToCsv;

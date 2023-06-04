function convertToStringable(el) {
  //convert data objects into something useful for the reader
  if (Array.isArray(el)) {
    return `${el}`; //built-in is fine for our case
  }
  //if is object
  if (typeof el === "object") {
    return JSON.stringify(el);
  } else return el;
}

const arrToCsv = (arr, columns, delimiter = ",") =>
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

//TODO: escape delimiter?
//TODO escape quotes?

export default arrToCsv;

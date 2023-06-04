import { DateTime } from "luxon";
const logs = [];

function logWhatshappening(content) {
  console.log(content);
  logs.push(content);
}

const groupBy = (array, key) => {
  return array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});
};

function analyzeAnswerSet(data) {
  const dataLength = data.length;
  logWhatshappening("Number of answers: " + dataLength);
  const mostRecent = data[dataLength - 1];
  logWhatshappening(
    "Most recent answer: " + new Date(mostRecent.date).toDateString()
  );
  //Sanity Checks
  logWhatshappening("-- Sanity checks...");
  //SC1: Are there entries without userID (those cant be matched)?
  const entriesWithUserId = data.filter((el) => "userID" in el);
  const entriesWithoutUserId = data.filter((el) => !("userID" in el));
  logWhatshappening("Entries with user ID: " + entriesWithUserId.length);
  logWhatshappening("Entries without user ID: " + entriesWithoutUserId.length);
  //SC2: How many entries exist by the same user? (we expect 1)
  const entriesPerUserName = groupBy(entriesWithUserId, "userID"); // how many entries exist by the same user? (we expect 1)
  const usersWithMoreThanOneEntry = [];
  Object.keys(entriesPerUserName).forEach((user) => {
    if (entriesPerUserName[user].length > 1) {
      usersWithMoreThanOneEntry.push({
        [user]: entriesPerUserName[user].length,
      });
    }
  });
  logWhatshappening(
    "Users with more than 1 entry: " +
      usersWithMoreThanOneEntry.map(JSON.stringify)
  );
}

function analyze(users, answersWorkshopStart, answersWorkshopEnd) {
  logWhatshappening("Number of users: " + users.length);
  logWhatshappening(
    "Sum of answersStart + answersEnd = " +
      (answersWorkshopStart.length + answersWorkshopEnd.length)
  );
  // Start
  logWhatshappening("--------- Analytics Answers/Workshop-Start --------- ");
  analyzeAnswerSet(answersWorkshopStart);
  //End
  logWhatshappening("--------- Analytics Answers/Workshop-End --------- ");
  analyzeAnswerSet(answersWorkshopEnd);
  logWhatshappening(
    "---- Crosslinking datasets by matching userID Workshop-Start & Workshop-End ----- "
  );
}

function combineStartandEnd(answersWorkshopStart, answersWorkshopEnd) {
  const answersWorkshopEndCopy = answersWorkshopEnd.slice();
  const newList = [];
  let matchCount = 0;
  answersWorkshopStart.forEach((answerRow) => {
    const userId = "userID" in answerRow ? answerRow["userID"] : undefined;
    if (!userId) {
      newList.push({ start: answerRow, end: null }); //cant make a match because userId is missing
    } else {
      const matchy = answersWorkshopEnd.find((el) => el["userID"] === userId);
      if (matchy) {
        matchCount += 1;
        newList.push({ start: answerRow, end: matchy }); //its a match
        const i = answersWorkshopEndCopy.indexOf(matchy);
        answersWorkshopEndCopy.splice(i, 1); //remove match from answers
      } else {
        newList.push({ start: answerRow, end: null }); //no match available in answersEnd
      }
    }
  });
  answersWorkshopEndCopy.forEach((answerRow) => {
    newList.push({ start: null, end: answerRow }); //adding remaining answerRows (aka those without an id, and those without a match in start)
  });
  logWhatshappening("Match count: " + matchCount);
  return newList;
}

function sortByDate(arr) {
  arr.sort(
    (el1, el2) => new Date(el1.date).valueOf() - new Date(el2.date).valueOf()
  );
}

function prefixAllKeys(obj, prefix) {
  const newObj = {};
  Object.keys(obj).forEach((k) => (newObj[prefix + k] = obj[k]));
  return newObj;
}

function flatten(list) {
  //append prefix to all keys to distinguish start from end!
  const flattened = list.map((row) => {
    const start = row.start;
    const end = row.end;
    let rnStart = {};
    let rnEnd = {};
    if (start) {
      rnStart = prefixAllKeys(start, "START_");
    }
    if (end) {
      rnEnd = prefixAllKeys(end, "END_");
    }
    return { ...rnStart, ...rnEnd };
  });
  return flattened;
}

function convertUTCDatesToSaxonyTime(arr) {
  arr.forEach((el) => {
    el.date = DateTime.fromISO(el.date, {
      zone: "Europe/Paris",
    });
  });
}

function doData(data, setInfo) {
  logWhatshappening(
    "FABMOBIL DATA ANALYTICS - Here you can find an overview of the data:"
  );
  const users = Object.values(data["users"]);
  const answersWorkshopStart = Object.values(data["answersWorkshopStart"]);
  const answersWorkshopEnd = Object.values(data["answersWorkshopEnd"]);
  sortByDate(answersWorkshopStart);
  sortByDate(answersWorkshopEnd);
  convertUTCDatesToSaxonyTime(answersWorkshopStart);
  convertUTCDatesToSaxonyTime(answersWorkshopEnd);
  analyze(users, answersWorkshopStart, answersWorkshopEnd);
  const list = combineStartandEnd(answersWorkshopStart, answersWorkshopEnd);
  setInfo(logs);
  return flatten(list);
}

export default doData;

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
  console.log("Number of answers: ", dataLength);
  const mostRecent = data[dataLength - 1];
  console.log("Most recent answer: ", mostRecent.date);
  //Sanity Checks
  console.log("-- Sanity checks...");
  //SC1: Are there entries without userID (those cant be matched)?
  const entriesWithUserId = data.filter((el) => "userID" in el);
  const entriesWithoutUserId = data.filter((el) => !("userID" in el));
  console.log("Entries with user ID: ", entriesWithUserId.length);
  console.log("Entries without user ID: ", entriesWithoutUserId.length);
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
  console.log("Users with more than 1 entry: ", usersWithMoreThanOneEntry);
}

function analyze(users, answersWorkshopStart, answersWorkshopEnd) {
  console.log("Number of users: ", users.length);
  console.log(
    "Sum of answersStart + answersEnd: ",
    answersWorkshopStart.length + answersWorkshopEnd.length
  );
  // Start
  console.log("--------- Analytics Answers/Workshop-Start --------- ");
  analyzeAnswerSet(answersWorkshopStart);
  //End
  console.log("--------- Analytics Answers/Workshop-End --------- ");
  analyzeAnswerSet(answersWorkshopEnd);
  console.log(
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
  console.log("match count", matchCount);
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

function doData(data) {
  console.log("... Fabmobil Data Analysis... ");
  const users = Object.values(data["users"]);
  const answersWorkshopStart = Object.values(data["answersWorkshopStart"]);
  const answersWorkshopEnd = Object.values(data["answersWorkshopEnd"]);
  //sort
  sortByDate(answersWorkshopStart);
  sortByDate(answersWorkshopEnd);
  analyze(users, answersWorkshopStart, answersWorkshopEnd);
  const list = combineStartandEnd(answersWorkshopStart, answersWorkshopEnd);
  return flatten(list);
}

export default doData;

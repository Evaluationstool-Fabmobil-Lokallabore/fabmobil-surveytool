import doData from "../script";
import firebaseProductionData from "./firebase-production-data.json";

test("Includes entries from workshopEnd dataset", () => {
  const data = {
    answersWorkshopEnd: {
      id1: { userID: "Foobar01012001", date: "2022-08-17T13:29:54.000Z" },
    },
    answersWorkshopStart: {},
    users: {},
  };
  const a = doData(data, () => {});
  expect(a).toHaveLength(1);
});

test("Prefixes keys of entries from workshopEnd dataset with END_", () => {
  const data = {
    answersWorkshopEnd: {
      id1: { userID: "Foobar01012001", date: "2022-08-17T13:29:54.000Z" },
    },
    answersWorkshopStart: {},
    users: {},
  };
  const resultArr = doData(data, () => {});
  const keys = resultArr.map((el) => Object.keys(el)).flat();
  keys.forEach((key) => expect(key).toMatch("END_")); //expect to have prefixes
});

test("If userID is missing, then entry is still included", () => {
  const data = {
    answersWorkshopEnd: {
      "-XX": {
        date: "2022-12-01T13:30:23.000Z",
      },
    },
    answersWorkshopStart: {
      "-NICsOJkE7HUcDLGm_WJ": {
        date: "2022-12-01T13:30:23.000Z",
      },
    },
    users: {},
  };

  const resultArr = doData(data, () => {});
  expect(resultArr).toHaveLength(2);
});

test("Matches workshopEnd with workshopStart if userId is identical", () => {
  const data = {
    answersWorkshopEnd: {
      id1: { userID: "Foobar01012001", date: "2022-08-17T13:29:54.000Z" },
    },
    answersWorkshopStart: {
      id1: { userID: "Foobar01012001", date: "2022-08-16T13:29:54.000Z" },
    },
    users: {},
  };
  const resultArr = doData(data, () => {});
  expect(resultArr).toHaveLength(1);
  expect(Object.keys(resultArr[0])).toHaveLength(6); //expect keys from original datasets to be present (plus key)
});

test("Keeps two seperate entries if cant match userIds", () => {
  const data = {
    answersWorkshopEnd: {
      id1: { userID: "Foobar01012001", date: "2022-08-17T13:29:54.000Z" },
    },
    answersWorkshopStart: {
      id1: { userID: "BarFoo01012001", date: "2022-08-16T13:29:54.000Z" },
    },
    users: {},
  };
  const resultArr = doData(data, () => {});
  expect(resultArr).toHaveLength(2);
  expect(Object.keys(resultArr[0])).toHaveLength(3); //expect keys from original datasets to be present (plus key)
  expect(Object.keys(resultArr[1])).toHaveLength(3); //expect keys from original datasets to be present (plus key)
});

//TODO: Check with client if this is what we actually want
test("Edgecase: A start-entry has multiple matches in end-set - Then we just takes the first match. Other matches become singletons.", () => {
  const data = {
    answersWorkshopEnd: {
      id1: { userID: "BarFoo01012001", date: "2022-08-17T13:29:54.000Z" },
      id2: { userID: "BarFoo01012001", date: "2022-08-18T13:29:54.000Z" },
    },
    answersWorkshopStart: {
      id1: { userID: "BarFoo01012001", date: "2022-08-16T13:29:54.000Z" },
    },
    users: {},
  };
  const resultArr = doData(data, () => {});
  expect(resultArr).toHaveLength(2);
});

//TODO: Check with client if this is what we actually want
test("Edgecase: There are multiple entries for the same user in workshopstart, but only 1 match in workshopend. Then we match all of them with the same end-entry...", () => {
  const data = {
    answersWorkshopEnd: {
      id1: { userID: "BarFoo01012001", date: "2023" },
    },
    answersWorkshopStart: {
      id1: { userID: "BarFoo01012001", date: "2000" },
      id2: { userID: "BarFoo01012001", date: "2001" },
      id3: { userID: "BarFoo01012001", date: "2002" },
      id4: { userID: "BarFoo01012001", date: "2003" },
      id5: { userID: "BarFoo01012001", date: "2004" },
    },
    users: {},
  };
  const resultArr = doData(data, () => {});
  expect(resultArr).toHaveLength(5);
});

//TODO: Check with client if this is what we actually want
test("Edgecase: There are multiple entries for the same user in workshopstart, and multiple matches in workshopend. Then we match all of them with the first end-entry...", () => {
  const data = {
    answersWorkshopEnd: {
      xxx: { userID: "BarFoo01012001", date: "2023" },
      yyy: { userID: "BarFoo01012001", date: "2024" },
    },
    answersWorkshopStart: {
      id1: { userID: "BarFoo01012001", date: "2000" },
      id2: { userID: "BarFoo01012001", date: "2001" },
      id3: { userID: "BarFoo01012001", date: "2002" },
      id4: { userID: "BarFoo01012001", date: "2003" },
      id5: { userID: "BarFoo01012001", date: "2004" },
    },
    users: {},
  };
  const resultArr = doData(data, () => {});
  const endKeys = resultArr
    .filter((el) => el["END_key"])
    .map((el) => el["END_key"]);
  expect(endKeys).toEqual(["xxx", "xxx", "xxx", "xxx", "xxx", "yyy"]);
  //this means we have multiple times the same entry...Probably not what we want
});

test("Contains newest entry", () => {
  const data = firebaseProductionData;
  const resultArr = doData(data, () => {});
  const mostRecentEndDate = resultArr
    .filter((el) => !!el["END_date"])
    .sort((a, b) => new Date(a["END_date"]) - new Date(b["END_date"]))
    .reverse()[0]["END_date"];
  expect(mostRecentEndDate.toString()).toBe("2023-05-31T13:40:24.559+02:00");
});

test("No entries get lost", () => {
  const data = firebaseProductionData;
  const nEntriesStart = Object.keys(data["answersWorkshopStart"]).length;
  const nEntriesEnd = Object.keys(data["answersWorkshopEnd"]).length;
  expect(nEntriesStart).toBe(1059);
  expect(nEntriesEnd).toBe(581);
  const resultArr = doData(data, () => {});
  const nEntriesTotal = nEntriesStart + nEntriesEnd;
  expect(resultArr.length).toBeLessThanOrEqual(nEntriesTotal);
  const matchCondition = (el) => !!el["START_date"] && !!el["END_date"];
  const xMatchCondition = (el) => !el["START_date"] || !el["END_date"];
  const matchCount = resultArr.filter(matchCondition).length; //rows that have both of these keys indicate a match
  const xMatchCount = resultArr.filter(xMatchCondition).length; //rows where one of these keys is missing, are singletons
  expect(matchCount * 2 + xMatchCount).toBe(nEntriesTotal);
});

test("No START-entries get lost (check by id)", () => {
  const data = firebaseProductionData;
  const entriesStartKeys = Object.keys(data["answersWorkshopStart"]);

  const resultArr = doData(data, () => {});
  const resultStartKeys = resultArr
    .filter((el) => el["START_key"])
    .map((el) => el["START_key"]);

  expect(resultStartKeys.sort()).toEqual(entriesStartKeys.sort());
});

test("No END-entries get lost (check by id)", () => {
  const data = firebaseProductionData;
  const entriesEndKeys = Object.keys(data["answersWorkshopEnd"]);

  const resultArr = doData(data, () => {});

  const resultEndKeys = resultArr
    .filter((el) => el["END_key"])
    .map((el) => el["END_key"]);
  expect(resultEndKeys.sort()).toEqual(entriesEndKeys.sort());
});

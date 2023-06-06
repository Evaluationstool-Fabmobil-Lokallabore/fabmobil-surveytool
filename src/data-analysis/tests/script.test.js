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
  expect(Object.keys(resultArr[0])).toHaveLength(4); //expect keys from original datasets to be present
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
  expect(Object.keys(resultArr[0])).toHaveLength(2); //expect keys from original datasets to be present
  expect(Object.keys(resultArr[1])).toHaveLength(2); //expect keys from original datasets to be present
});

//TODO: Doing so would be a future Matching Feature
test("Does not do matching if there are +1 entries with same userId in WorkshopEnd", () => {
  const data = {
    answersWorkshopEnd: {
      id1: { userID: "Foobar01012001", date: "2022-08-17T13:29:54.000Z" },
      id2: { userID: "Foobar01012001", date: "2022-08-18T13:29:54.000Z" },
    },
    answersWorkshopStart: {
      id1: { userID: "BarFoo01012001", date: "2022-08-16T13:29:54.000Z" },
    },
    users: {},
  };
  const resultArr = doData(data, () => {});
  expect(resultArr).toHaveLength(3);
});

//TODO: Doing so would be a future Matching Feature
test("Does not do matching if there are +1 entries with same userId in WorkshopStart", () => {
  const data = {
    answersWorkshopEnd: {
      id1: { userID: "Foobar01012001", date: "2022-08-17T13:29:54.000Z" },
    },
    answersWorkshopStart: {
      id1: { userID: "BarFoo01012001", date: "2022-08-16T13:29:54.000Z" },
      id2: { userID: "BarFoo01012001", date: "2022-08-17T13:29:54.000Z" },
    },
    users: {},
  };
  const resultArr = doData(data, () => {});
  expect(resultArr).toHaveLength(3);
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

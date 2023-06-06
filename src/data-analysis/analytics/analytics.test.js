import data from "../unit-tests/firebase-production-data.json";

/* coincidences happen in our universe --->>> ignore this check/test */
/* test("There are no entries in answersWorkshopEnd with exactly the same timestamp", () => {
  const answersWorkshopEnd = Object.values(data["answersWorkshopEnd"]);
  const timeStamps = answersWorkshopEnd.map((el) => el["date"]);
  expect(timeStamps).toEqual([...new Set(timeStamps)]);
}); */

test("There are no entries with same UserID within answersWorkshopStart", () => {
  const answersWorkshopStart = Object.values(data["answersWorkshopStart"]);
  const userIDs = answersWorkshopStart
    .filter((el) => !!el["userID"])
    .map((el) => el["userID"]);
  expect(userIDs).toEqual([...new Set(userIDs)]);
});

test("There are no entries with same UserID within answersWorkshopEnd", () => {
  const answersWorkshopEnd = Object.values(data["answersWorkshopEnd"]);
  const userIDs = answersWorkshopEnd
    .filter((el) => !!el["userID"])
    .map((el) => el["userID"]);
  expect(userIDs).toEqual([...new Set(userIDs)]);
});

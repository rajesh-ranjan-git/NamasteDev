const sortUsersByAge = require("../app");

test("Testing if sortUsersByAge returns an array", () => {
  const sortedUsers = sortUsersByAge();

  expect(Array.isArray(sortedUsers)).toBe(true);
});

test("Testing of sorting users by age", () => {
  const sortedUsers = sortUsersByAge();

  expect(sortedUsers[0].name).toBe("Engineer Chirag");
});

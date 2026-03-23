const users = [
  {
    name: "Rajesh Ranjan",
    age: 30,
  },
  {
    name: "Kripanidhan",
    age: 12,
  },
  {
    name: "Sayantanee Mohanta",
    age: 16,
  },
  {
    name: "Rahee",
    age: 28,
  },
  {
    name: "Akshay Saini",
    age: 35,
  },
  {
    name: "Engineer Chirag",
    age: 8,
  },
];

const sortUsersByAge = () => {
  return users.sort((a, b) => a.age - b.age);
};

const sortedUsers = sortUsersByAge();

module.exports = sortUsersByAge;

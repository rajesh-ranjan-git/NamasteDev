import express from "express";

const app = express();

app.use("/hello", (req, res) => {
  res.send({
    status: "ok",
    message: "Hello Hello Hello...!",
  });
});

app.use("/test", (req, res) => {
  res.send({
    status: "ok",
    message: "Testing routing...!",
  });
});

app.use("/abracadabra", (req, res) => {
  res.send({
    status: "ok",
    message: "abracadabra...!",
  });
});

app.use("/", (req, res) => {
  res.send({
    status: "ok",
    message: "Server is running...!",
  });
});

app.listen(7777, () => {
  console.log("Server is listening at port : 7777");
});

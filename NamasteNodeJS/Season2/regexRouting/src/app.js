import express from "express";

const app = express();

// app.use(/\/ab+c/, (req, res) => {
//   res.send({
//     status: "ok",
//     message: "Route : /ab+c -> /abc, /abbc, /abbbc, /abbbbc ...",
//   });
// });

// app.use(/\/ab*c/, (req, res) => {
//   res.send({
//     status: "ok",
//     message: "Route : /ab*c -> /abc, /abbc, /abbbc, /abbbbc ...",
//   });
// });

app.use(/\/ab?c/, (req, res) => {
  res.send({
    status: "ok",
    message: "Route : /ab?c -> /ac, /abc",
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

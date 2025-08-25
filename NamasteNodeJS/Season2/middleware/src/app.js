import express from "express";
import { authMiddleware } from "../middleware/auth.js";
import { otherMiddleware } from "../middleware/other.js";

const app = express();

app.use("/hello", authMiddleware);

app.use("/hello", otherMiddleware);

app.use("/hello", (req, res) => {
  res.send({
    status: "ok",
    message: "Hello Hello Hello...!",
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

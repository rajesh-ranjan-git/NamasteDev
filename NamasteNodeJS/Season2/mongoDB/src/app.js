import express from "express";
import connectDB from "../config/database/connectDB.js";

const app = express();

app.use("/", (req, res) => {
  res.send({
    status: "ok",
    message: "Server is running...!",
  });
});

connectDB()
  .then(() => {
    console.log("Starting server...");
    app.listen(7777, () => {
      console.log("Server is listening at port : 7777");
    });
  })
  .catch((err) => {
    console.error("An error occurred while connecting database : ", err);
  });

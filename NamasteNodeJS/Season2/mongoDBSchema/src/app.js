import express from "express";
import connectDB from "../config/database/connectDB.js";
import { signUp } from "../controllers/user.js";
import { signIn } from "../controllers/user.js";

const app = express();

app.use(express.json());

app.post("/signup", signUp);

app.post("/signin", signIn);

app.get("/", (req, res) => {
  res.status(200).send({
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

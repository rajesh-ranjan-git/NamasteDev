import express from "express";

const app = express();

app.use("/hello", (req, res) => {
  throw new Error("An Error occurred...!");
  next();
});

app.use("/hello", (err, req, res, next) => {
  if (err) {
    res.send({
      status: "error",
      error: err.message,
      message: "Something went wrong...!",
    });
  } else {
    res.send({
      status: "ok",
      message: "Hello Hello Hello...!",
    });
  }
});

app.use("/", (req, res) => {
  try { // This is the best way to handle error, we should always use try catcfh for error handling
    res.send({
      status: "ok",
      message: "Server is running...!",
    });
  } catch (err) {
    console.error("An error occurred : ", err.message);
  }
});

app.listen(7777, () => {
  console.log("Server is listening at port : 7777");
});

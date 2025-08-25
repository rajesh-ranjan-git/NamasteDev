import express from "express";

const app = express();

app.get("/hello", (req, res) => {
  res.send({
    status: "ok",
    method: "get",
    message: "Hello Hello Hello...!",
  });
});

app.post("/hello", (req, res) => {
  res.send({
    status: "ok",
    method: "post",
    message: "Hello Hello Hello...!",
  });
});

app.put("/hello", (req, res) => {
  res.send({
    status: "ok",
    method: "put",
    message: "Hello Hello Hello...!",
  });
});

app.patch("/hello", (req, res) => {
  res.send({
    status: "ok",
    method: "patch",
    message: "Hello Hello Hello...!",
  });
});

app.delete("/hello", (req, res) => {
  res.send({
    status: "ok",
    method: "delete",
    message: "Hello Hello Hello...!",
  });
});

app.get("/test", (req, res) => {
  res.send({
    status: "ok",
    method: "get",
    message: "Testing routing...!",
  });
});

app.post("/test", (req, res) => {
  res.send({
    status: "ok",
    method: "post",
    message: "Testing routing...!",
  });
});

app.get("/abracadabra", (req, res) => {
  res.send({
    status: "ok",
    method: "get",
    message: "abracadabra...!",
  });
});

app.post("/abracadabra", (req, res) => {
  res.send({
    status: "ok",
    method: "post",
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

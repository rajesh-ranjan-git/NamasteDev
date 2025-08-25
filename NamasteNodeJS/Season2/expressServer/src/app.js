import express from "express";

const app = express();

app.use((req, res) => {
    res.send({
        status : "ok",
        message: "Server is running...!"
    })
})

app.listen(7777, () => {
  console.log("Server is listening at port : 7777");
});

import path from "path";
import { fileURLToPath } from "url";
import express from "express";

const PORT = 5011;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static("public"));

app.get("/iframe", (req, res) => {
  res.sendFile(__dirname + "/public/iframe.html");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

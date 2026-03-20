import path from "path";
import { fileURLToPath } from "url";
import express from "express";

const PORT = 5010;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static("public"));

app.use((req, res, next) => {
  // res.setHeader("Permissions-Policy", "geolocation=*");
  // res.setHeader("Permissions-Policy", "geolocation=()");
  // res.setHeader("Permissions-Policy", "geolocation=self");
  res.setHeader(
    "Permissions-Policy",
    'geolocation=(self "http://localhost:5011")',
  );

  next();
});

app.get("/example", (req, res) => {
  res.sendFile(__dirname + "/public/example.html");
});

app.get("/iframe", (req, res) => {
  res.sendFile(__dirname + "/public/iframe.html");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("I am get request from home route");
});

app.post("/", (req, res) => {
  res.send("i am post request from about page");
});

app.put("/", (req, res) => {
  res.send("i am put request from hero route");
});

app.delete("/", (req, res) => {
  res.send("i am delete request from login route");
});

app.listen(5000, () => {
  console.log(`Seerver running at http://localhost:5000`);
});

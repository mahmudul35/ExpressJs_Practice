const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/register", (req, res) => {
  const fullname = req.body.fullname;
  const age = req.body.age;
  res.send(`<h1><i>Hello, ${fullname},You are, ${age}</i></h1>`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 4000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.post("/", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  res.send(`Welcome ${name}.You are ${age}`);
});
app.listen(PORT, () => {
  console.log(`Server runing on at http://localhost:${PORT}`);
});

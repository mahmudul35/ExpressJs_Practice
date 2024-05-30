const express = require("express");
const app = express();
const PORT = 3000;

//Request with query parameter
app.get("/", (req, res) => {
  const id = req.query.id;
  const name = req.query.name;
  res.send(`<h1>id is=${id}, name is = ${name}</h1>`);
});

//Request with Route Parameter
app.get("/login/userId/:id/userAge/:userAge", (req, res) => {
  const id = req.params.id;
  const age = req.params.userAge;
  res.send(`user id ${id} and user age ${age}`);
});

//Request with Header Parameter using Postman
app.get("/login", (req, res) => {
  const id = req.header("id");
  const name = req.header("name");
  res.send(`Your id is=${id}.You name is  =${name}`);
});
app.listen(PORT, () => {
  console.log(`Sever running on http://localhost:${PORT}`);
});

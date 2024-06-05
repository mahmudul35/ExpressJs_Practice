const express = require("express");
const app = express();
const PORT = 3001;

app.get("/products/:id([0-9] {3})", (req, res) => {
  const id = req.params.id;
  res.send(`hello from products route :${id}`);
});

app.get("/products/:title([abc] {3})", (req, res) => {
  res.send(`<h1>title : ${req.params.title}</h1>`);
});

//if cant find this second then it show this route
app.get("*", (req, res) => {
  res.status(404).json({
    message: "not a vald url",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

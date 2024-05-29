const express = require("express");
const app = express();

app.get("/login", (req, res) => {
  //passing JSON
  //   res.status(200).json({
  //     name: "Mahmudul Hasan",
  //     age: 24,
  //     statusCode: 200,
  //   });

  //if user not in register then go to register route directly
  //   res.redirect("/register");

  //sending login html code
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/login.html");
});

app.get("/register", (req, res) => {
  //   res.statusCode = 200;
  //   res.sendFile(__dirname + "/views/register.html");

  //send cookies key value
  //   res.cookie("name", "marsel");
  //   res.cookie("age", 34);
  //if we want to clear name cookie
  res.clearCookie("name");
  res.end();
});

module.exports = app;

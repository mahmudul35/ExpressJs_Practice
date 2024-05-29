const express = require("express");
const userRouter = require("./routes/users.route");
const app = express();

app.use("/api/users", userRouter);

app.use((req, res) => {
  res.send("<h1>404!!not a valid url</h1>");
});
module.exports = app;

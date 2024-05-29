const app = require("./app");
const PORT = 5000;

//for home route
app.get("/", (req, res) => {
  res.send("i am get request from home route ");
});

//for wrong route that doesn't exist
app.use((req, res) => {
  res.send("404!!bad request");
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});

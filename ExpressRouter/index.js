const app = require("./app");
const dotenv = require("dotenv");
require("dotenv").config();

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});

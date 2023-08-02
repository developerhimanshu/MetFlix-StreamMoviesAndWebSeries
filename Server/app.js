const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(express.static("../dist"));

app.listen(port, (req, res) => {
  console.log("Your app is listening on port " + port);
});

const express = require("express");
const app = express();
require("dotenv").config();
const connectDb = require("./db/connect");
const authRoute = require("./routes/auth.js");
const port = process.env.PORT || 3001;
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handle");
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/api/v1/auth", authRoute);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, (req, res) => {
      console.log("Your app is listening on port " + port);
    });
  } catch (err) {
    console.log(err);
  }
};

start();

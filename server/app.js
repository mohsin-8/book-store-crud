const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bookRoute = require("./routes/bookRoutes");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use("/books", bookRoute);

const DBUri = process.env.MONGODB_URL;
mongoose
  .connect(DBUri)
  .then(() => {
    console.log("mongodb connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

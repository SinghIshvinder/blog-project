const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const route = require("./routes/route");

app.use("/", route);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

try {
  mongoose.connect("mongodb://0.0.0.0:27017/Project-Blog1", {
    useNewUrlParser: true,
  });
  console.log("MongoDB connection successful.");
} catch (error) {
  console.log(error);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on ${port}`));

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const route = require("./routes/route");
const mongoose = require("mongoose");
const blogModel = require("./models/blogModel");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", route);

mongoose
  .connect("mongodb://0.0.0.0:27017/project-Blog", {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});

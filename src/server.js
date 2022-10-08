const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cors());

require("./Controllers/authController")(app);

app.listen(3001, () => {
  console.log("listening on http://localhost:3001");
});

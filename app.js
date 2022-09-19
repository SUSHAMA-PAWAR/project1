const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
require("./v1/models/db");

const port = process.env.PORT || 8888;
const app= express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1/users", require("./v1/routes/user.route"));

app.listen(port, () => {
    console.log(`Server is listening on port${port}`);
});
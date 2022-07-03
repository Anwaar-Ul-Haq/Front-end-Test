const express = require("express");
const cors = require("cors");
const routes = require("./app/routes");

const app = express();
app.use(cors())
// set our port
const port = process.env.PORT || 4001;

// routes
app.use("/", routes);

// start app at localhost:8080
app.listen(port);

console.log(`Listening on ${port}`);
module.exports = app;

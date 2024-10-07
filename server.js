require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes");
const port = process.env.APP_PORT;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(router);

app.listen(port, () => console.log(`http://localhost:${port}`));

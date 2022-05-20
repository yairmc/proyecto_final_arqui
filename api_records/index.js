const express = require("express");
const router = require("./router/router");
const dbConnection = require("./config/dbConnection");
const bp = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
dbConnection();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

const port = 3003;
const host = "localhost";

app.use("/", router);

app.listen(port, host, () => {
  console.log(`Server conection in ${host}:${port}`);
});

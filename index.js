const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const { readdirSync } = require("fs");
const cors = require("cors");

// connecting to database and all database connection related code is here
const db = require("./db");
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const corsConfig = {
  origin: true,
  credentials: true,
};
app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

app.get("/", (req, res) => {
  res.status(200).json("OK");
});

const routesPath = __dirname + "/routes";
readdirSync(routesPath).forEach((file) => {
  const routeName = file.split(".")[0];
  const routeHandler = require(`${routesPath}/${file}`);
  app.use(`/${routeName}`, routeHandler);
});

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});

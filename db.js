const mongoose = require("mongoose");
// reads config file
require("dotenv").config();
let databaseUrl = process.env.DATABASE_DEVELOPMENT;

if (process.env.NODE_ENV === "production") {
  databaseUrl = process.env.DATABASE_PRODUCTION;
}
// connects to database
mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// If the connection Connnectd
mongoose.connection.on("connected", () => {
  console.log("Mongoose default connection established.");
});

// If the connection throws an error
mongoose.connection.on("error", (err) => {
  console.log("Mongoose default connection error: " + err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose default connection disconnected.");
});

process.on("SIGINT", () => {
  mongoose.connection.close(function () {
    console.log(
      "Mongoose default connection disconnected through app termination."
    );
    process.exit(0);
  });
});

module.exports = db;

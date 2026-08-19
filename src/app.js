const express = require("express");
const app = express();
const port = 8081;

const knex = require("knex")(require("../knexfile.js")["development"]);

app.get("/", (req, res) => {
  res.send("Application up and running.");
});

// app.get("/bikes", (req, res) => {
//   knex("bikes")
//     .select("*")
//     .then((data) => {
//       var petNames = data.map((pet) => pet.name);
//       res.json(petNames);
//     });
// });

app.listen(port, () => {
  console.log("Your Knex and Express application are running successfully");
});

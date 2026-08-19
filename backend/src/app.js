const express = require("express");
const app = express();
const logger = require("morgan");
app.use(logger("tiny"));
const port = 8081;

const knex = require("knex")(require("../knexfile.js")["development"]);

app.get("/", (req, res) => {
  res.send("Application up and running.");
});

app.get("/bikes", (req, res) => {
  let query = knex("bike").select("*");
  if (req.query.id) {
    query = query.where("id", req.query.id);
  }
  query.then((data) => {
    res.json(data);
  });
});

app.get("/bikes/:id", (req, res) => {
  knex("bike")
    .join("bike_components", "bike.bike_components_id", "bike_components.id")
    .join("rider", "bike.rider_id", "rider.id")
    .where("bike.id", req.params.id)
    .select(
      "bike.*",
      "bike_components.crankset",
      "bike_components.fork",
      "bike_components.chain",
      "bike_components.shifter",
      "bike_components.handlebar",
      "bike_components.derailleur",
      "bike_components.pedals",
      "bike_components.brakes",
      "bike_components.tires",
      "bike_components.frame",
      "bike_components.wheel",
      "bike_components.saddle",
      "bike_components.cassette",
      "bike_components.stem",
      "rider.name",
      "rider.nationality",
      "rider.birthday",
      "rider.height",
      "rider.weight",
    )
    .then((data) => {
      if (data.length === 0) {
        return res.status(404).json({ error: "Bike not found" });
      }

      res.json(data);
    });
});

app.post("/bikes", (req, res) => {
  knex("bike")
    .insert(req.body)
    .returning("*")
    .then((data) => {
      res.status(201).json(data);
    });
});

app.patch("/bikes/:id", (req, res) => {
  knex("bike")
    .where("id", req.params.id)
    .update(req.body)
    .returning("*")
    .then((data) => {
      if (data.length === 0) {
        return res.status(404).json({ error: "Bike not found" });
      }

      res.json(data);
    });
});

app.delete("/bikes/:id", (req, res) => {
  knex("bike")
    .where("id", req.params.id)
    .del()
    .returning("*")
    .then((data) => {
      if (data.length === 0) {
        return res.status(404).json({ error: "Bike not found" });
      }

      res.json(data);
    });
});

app.get("/riders", (req, res) => {
  knex("rider")
    .select("*")
    .then((data) => {
      var riderNames = data.map((rider) => rider.name);
      res.json(riderNames);
    });
});

app.get("/riders/:id", (req, res) => {
  knex("rider")
    .where("rider.id", req.params.id)
    .select("*")
    .then((data) => {
      if (data.length === 0) {
        return res.status(404).json({ error: "Rider not found" });
      }
      var riderInfo = data.map((details) => details);
      res.json(riderInfo);
    });
});

app.post("/riders", (req, res) => {
  knex("rider")
    .insert(req.body)
    .returning("*")
    .then((data) => {
      res.status(201).json(data);
    });
});

app.patch("/riders/:id", (req, res) => {
  knex("rider")
    .where("id", req.params.id)
    .update(req.body)
    .returning("*")
    .then((data) => {
      if (data.length === 0) {
        return res.status(404).json({ error: "Rider not found" });
      }

      res.json(data);
    });
});

app.delete("/riders/:id", (req, res) => {
  knex("rider")
    .where("id", req.params.id)
    .del()
    .returning("*")
    .then((data) => {
      if (data.length === 0) {
        return res.status(404).json({ error: "Rider not found" });
      }

      res.json(data);
    });
});

app.get("/components", (req, res) => {
  knex("bike_components")
    .select("*")
    .then((data) => {
      var bikeParts = data.map((parts) => parts);
      res.json(bikeParts);
    });
});

app.post("/components", (req, res) => {
  knex("bike_components")
    .insert(req.body)
    .returning("*")
    .then((data) => {
      res.status(201).json(data);
    });
});

app.get("/components/:id", (req, res) => {
  knex("bike_components")
    .where("id", req.params.id)
    .select("*")
    .then((data) => {
      if (data.length === 0) {
        return res.status(404).json({ error: "Components not found" });
      }

      var componentInfo = data.map((details) => details);

      res.json(componentInfo);
    });
});

app.patch("/components/:id", (req, res) => {
  knex("bike_components")
    .where("id", req.params.id)
    .update(req.body)
    .returning("*")
    .then((data) => {
      if (data.length === 0) {
        return res.status(404).json({ error: "Components not found" });
      }

      res.json(data);
    });
});

app.delete("/components/:id", (req, res) => {
  knex("bike_components")
    .where("id", req.params.id)
    .del()
    .returning("*")
    .then((data) => {
      if (data.length === 0) {
        return res.status(404).json({ error: "Components not found" });
      }

      res.json(data);
    });
});

app.listen(port, () => {
  console.log("Your Knex and Express application are running successfully");
});

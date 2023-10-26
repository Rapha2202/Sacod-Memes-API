const express = require("express");
const cors = require("cors");
const db = require("./db.json");

const app = express();

app.use(cors());

const PORT = 3300;

app.get("/", (req, res) => {
  res.send("Allez lire la Doc -> https://rapha2202.github.io/Sacod-Memes-API/");
});

//memes

app.get("/api/memes/all", (req, res) => {
  res.send(db.memes);
});

app.get("/api/memes/random", (req, res) => {
  const data = db.memes[Math.floor(Math.random() * db.memes.length)];

  res.send(data);
});

app.get("/api/memes/id/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = db.memes.find((item) => item.id === id);

  if (!data) {
    res.status(404).send("Path not found");
  } else {
    res.send(data);
  }
});

app.get("/api/memes/auteur/:auteur", (req, res) => {
  const auteur = req.params.auteur.toLowerCase();
  const data = db.memes.filter((item) => item.auteur.toLowerCase() === auteur);

  if (!data) {
    res.status(404).send("Path not found");
  } else {
    res.send(data);
  }
});

//montage

app.get("/api/montages/all", (req, res) => {
  res.send(db.montages);
});

app.get("/api/montages/random", (req, res) => {
  const data = db.montages[Math.floor(Math.random() * db.montages.length)];

  res.send(data);
});

app.get("/api/montages/id/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = db.montages.find((item) => item.id === id);

  if (!data) {
    res.status(404).send("Path not found");
  } else {
    res.send(data);
  }
});

app.get("/api/montages/name/:name", (req, res) => {
  const name = req.params.name.toLowerCase();
  const data = db.montages.filter((item) => item.name.toLowerCase() === name);

  if (!data) {
    res.status(404).send("Path not found");
  } else {
    res.send(data);
  }
});

app.listen(PORT, () => {
  console.info(
    `Le serveur est lancé sur le port ${PORT} -> http://localhost:${PORT}`
  );
});

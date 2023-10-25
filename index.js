const express = require("express");
const db = require("./db.json");

const app = express();

const PORT = 3300;

app.get("/", (req, res) => {
  res.send("Allez lire la Doc -> https://github.com/Rapha2202/Sacod-Memes-API");
});

app.get("/api/all", (req, res) => {
  res.send(db);
});

app.get("/api/random", (req, res) => {
  const data = db.memes[Math.floor(Math.random() * db.memes.length)];

  res.send(data);
});

app.get("/api/id/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = db.memes.find((item) => item.id === id);

  if (!data) {
    res.status(404).send("Path not found");
  } else {
    res.send(data);
  }
});

app.get("/api/auteur/:auteur", (req, res) => {
  const auteur = req.params.auteur.toLowerCase();
  const data = db.memes.filter((item) => item.auteur.toLowerCase() === auteur);

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

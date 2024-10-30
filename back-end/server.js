const express = require("express");
const app = express();

const mysql = require("mysql");
const port = 3095;
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Bienvenue sur mon serveur Express !");
});

app.listen(port, () => {
  console.log('Serveur démarré sur le port ${port}');
});
//intégration de BDD
//se connecter à la BDD

app.use(express.json());

const database = mysql.createConnection({
  host: "localhost", // Ne pas mettre localhost:3000 ici
  user: "root", // Remplace par ton utilisateur MySQL
  password: "password", // Remplace par ton mot de passe MySQL
  database: "frigo_recettes", // Remplace par ton nom de base de données
});

//exception jetée en cas d'erreur
database.connect(function (err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");
});
// Exécutez une requête SQL
database.query("SELECT * FROM produits", (err, results) => {
  if (err) {
    console.error("Erreur lors de la requête SQL :", err);
    return;
  }
  console.log("Résultats :", results);
});

// Fermez la connexion après l'exécution
// database.end();

app.get("/recettes", (req, res) => {
  database.query("SELECT * FROM recettes", (err, results, fields) => {
    // console.log("Oups, Erreur", err);
    // console.log("Voici le résultat", results);
    // console.log("Voici mes champs", fields);

    res.send(results);
  });
});
app.get("/produits", (req, res) => {
  database.query("SELECT * FROM produits", (err, results, fields) => {
    console.log("Oups, Erreur", err);
    console.log("Voici le résultat", results);
    console.log("Voici mes champs", fields);

    res.send(results);
  });
});

// Importer le module Express
const express = require('express');
// Importer le module MySQL2 avec support des promesses
const mysql = require('mysql2/promise');
const cors = require("cors"); // Middleware pour gérer les requêtes Cross-Origin

// Créer une instance de l'application Express
const app = express();

// Définir le port du serveur (par exemple, 3094)
const PORT = 3094;

// Middleware pour analyser le corps des requêtes en JSON
app.use(express.json());
app.use(cors()); // Permet les requêtes cross-origin (important pour les applications web modernes)

// Définir une route de base (GET)
app.get('/', (req, res) => {
    res.send('Bienvenue dans votre API backend avec Node.js et Express!');
});

// Créer une connexion à la base de données frigo-recettes deja existante 
const db = mysql.createConnection({
    host: "localhost", // Ou l'adresse de votre serveur MySQL
    user: "root", // Votre nom d'utilisateur MySQL
    password: "password", // Votre mot de passe MySQL
    database: "frigo_recettes",
});

// Connecter à la base de données et afficher un message de succès ou d'erreur
db.then(() => {
    console.log("Connecté à MySQL avec mysql2");
}).catch((err) => {
    console.error("Erreur de connexion à la base de données:", err);
});

// On utilisant une fonction async utilisant la promesse
async function main() {
    try {
        const [results, fields] = await db.then(conn => conn.query('SHOW TABLES'));
        console.log(results);
    } catch (err) {
        console.error(err);
    }
}

// Appeler la fonction principale
main();

// Lancer le serveur et écouter les connexions
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});

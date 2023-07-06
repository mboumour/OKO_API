const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware de gestion des CORS
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Remplacez le domaine avec le vôtre
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

// Utiliser le middleware body-parser pour analyser les données JSON
app.use(bodyParser.json());

// Routes de GET
app.get('/api/projets', (req, res) => {
    const data = [
      {new : true, favoris : true, libellé : "Fête de la musique - édition 2023", collectivité : "Région Aquitaine" },
      {new : true, favoris : false, libellé : "Fête de la musique - édition 2022", collectivité : "Région Aquitaine" },
      {new : true, favoris : true, libellé : "Construction d’un lycée général - 2023", collectivité : "Ville de Cénon" },
      {new : false, favoris : false, libellé : "Aménagement piste cyclable urbaine", collectivité : "Ville de Libourne" },
      {new : false, favoris : false, libellé : "Extension de la ligne A", collectivité : "Bordeaux Métropole" },
      {new : false, favoris : false, libellé : "Construction Cité du Vin - 2016", collectivité : "Région Aquitaine" },
      {new : false, favoris : false, libellé : "Rénovation de l’hôtel de ville", collectivité : "Ville de Bordeaux" },
    ];
    res.json(data);
  });

app.get('/api/impact-caracteristiques', (req, res) => {
  const data = {énergie : 104, déchets : 326, eau : 22000, GES: 84};
  res.json(data);
});

// Routes de POST
app.post('/api/creer-projet', (req, res) => {
    const { nomProjet } = req.body;
    res.json({ message: 'Nouveau projet créé avec succès'});
    console.log({ message: 'Nouveau projet créé succès', nomProjet: nomProjet });
});

app.post('/api/indicateurs', (req, res) => {
    const { indicateurs } = req.body;
    res.json({ message: 'indicateurs reçus avec succès'});
    console.log({ message: 'indicateurs reçus avec succès', indicateurs: indicateurs });
});

app.post('/api/fiche-identite', (req, res) => {
    const { dateDebut, dateFin, Lieux } = req.body;
    res.json({ message: 'Élément créé avec succès'});
    console.log({ message: 'Élément créé avec succès', dateDebut: dateDebut, dateFin: dateFin, Lieux:Lieux });
});


// Routes de PUT
// app.put('/api/elements/:id', (req, res) => {
//     const id = req.params.id;
//     const { nom, description } = req.body;
//     res.json({ message: `Élément avec l'identifiant ${id} mis à jour avec succès` });
//   });


// Gérer les erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Une erreur est survenue !' });
});

module.exports = app;
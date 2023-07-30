const path = require('path'); // A NE PAS OMETTRE!
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// Pour demander à Node de servir les fichiers à partir du build de React
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

  // Pour les requêtes non traitées par le code précédent, ceci affiche l'appli React
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });


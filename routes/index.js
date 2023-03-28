/*
*Redgy Pérard
*8 mars 2023
*./routes/index.js
*/

const express = require('express');
const router = express.Router();

router.get('/', (requete, reponse) => {
    reponse.send('utilisez /api/messages pour faire appel au service Web des messages...');
});

router.get('/api/aide', (requete, reponse) => {
    reponse.send('Pour plus de details de comment utiliser un API et la documentation aller sur le site : "https://docs.github.com/en/rest"');
});

router.get('/index.html', (requete, reponse) => {
    lirePageWeb('index.html', reponse);
});

function lirePageWeb(nomPageWeb, reponse) {
    const fs = require('fs');
    const path = require('path');
    const fichier = path.join(__dirname, "..", nomPageWeb);
    console.log(fichier);
    fs.readFile(fichier, (err, contenu) => {
        if (err) {
            reponse.status(500).send('Erreur serveur Web: '+err.code);
        } else {
            reponse.status(200).set( {'Content-type': 'text/html'} ).send(contenu);
        }
    });
}

module.exports = router;



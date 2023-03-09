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

module.exports = router;



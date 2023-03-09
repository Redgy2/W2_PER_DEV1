const express = require('express');
const router = express.Router();

const Messages = require('../modeles/message.js');

router.get('/', (requete, reponse) => {
    Messages.getMessage((err, message)=>{
        if (err) throw err;
        reponse.json(message);
    }, 250);
});

router.get('/:id', (requete, reponse) => {
    Messages.getMessageParChamp("_id", requete.params.id, (err, message)=>{
        if (err) throw err;
        reponse.json(message);
    });
});

router.get('/description/:texte', (requete, reponse) => {
    Messages.getMessageParChamp("description", requete.params.texte, (err, message)=>{
        if (err) throw err;
        reponse.json(message);
    },250);
});

router.get('/titre/:texte', (requete, reponse) => {
    Messages.getMessageParChamp("titre", requete.params.texte, (err, message)=>{
        if (err) throw err;
        reponse.json(message);
    },250);
});

router.get('/auteur/:texte', (requete, reponse) => {
    Messages.getMessageParChamp("auteur", requete.params.texte, (err, message)=>{
        if (err) throw err;
        reponse.json(message);
    },250);
});

router.delete('/:id', (requete, reponse)=>{
    Messages.supprimerMessage(requete.params.id, (err, message) => {
        if (err) throw err;
        reponse.json(message);
    });
});

router.post('/', (requete, reponse) => {
    let msg = requete.body;
    Messages.ajoutMessage( msg, (err, retourMessage)=>{
        if (err) throw err;
        reponse.json(retourMessage);
    });
});

router.put('/:id', (requete, reponse)=>{
    let nouveauMessage = requete.body;
    Messages.modifierMessage(requete.params.id, nouveauMessage, (err, resultat) => {
        if (err) throw err;
        reponse.json(resultat);
    });
});

module.exports = router;


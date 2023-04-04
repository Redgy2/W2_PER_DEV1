const express = require('express');
const router = express.Router();

const Messages = require('../modeles/message.js');
const mongoose = require("mongoose");

router.get('/', (requete, reponse) => {
    Messages.find({}, null, {limit:3, sort:{auteur:-1}}).exec()
    .then((messages)=>reponse.json(messages))
    .catch((err)=>console.log(err));
    
});

router.get('/:id', (requete, reponse) => {    
     Messages.find({_id: RegExp(requete.params.id)}, null, {limit:3, sort:{auteur:1}}).exec()
    .then((messages)=>reponse.json(messages))
    .catch((err)=>console.log(err));        
});

router.get('/description/:texte', (requete, reponse) => {
    Messages.find({description: RegExp(requete.params.texte)}, null, {limit:3, sort:{auteur:1}}).exec()
    .then((messages)=>reponse.json(messages))
    .catch((err)=>console.log(err)); 
});

router.get('/titre/:texte', (requete, reponse) => {
    Messages.find({titre: RegExp(requete.params.texte)}, null, {limit:3, sort:{auteur:1}}).exec()
    .then((messages)=>reponse.json(messages))
    .catch((err)=>console.log(err)); 
});

router.get('/auteur/:texte', (requete, reponse) => {
    Messages.find({auteur: RegExp(requete.params.texte,"i")}, null, {limit:3, sort:{titre:1}}).exec()
    .then((messages)=>reponse.json(messages))
    .catch((err)=>console.log(err)); 
});

router.delete('/:id', (requete, reponse)=>{
    Messages.deleteOne({_id: requete.params.id})
    .then(res=>reponse.json(res))
    .catch(err=>console.log(err));
});

router.post('/', (requete, reponse) => {
    let msg = requete.body;
    msg._id = new mongoose.Types.ObjectId();
    Messages.create(msg)
    .then(resultat=>reponse.json(resultat))
    .catch(err=>console.log(err));
});

router.put('/:id', (requete, reponse)=>{
    let nouveauMessage = requete.body;
    Messages.findOneAndUpdate(
        {_id: requete.params.id},
        nouveauMessage,
        {new:true})
    .then(resultat=>reponse.json(resultat))
    .catch(err=>console.log(err));   
});

module.exports = router;


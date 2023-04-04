/*
*Redgy Pérard
*3 avril 2023
*./modeles/message.js
*modèle Mongoose pour accéder à la collection message
*/


const mongoose = require('mongoose');

let schemaMessage = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    titre: {
        type: String,
        required: true
    },
    auteur: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    langue: {
        type: String,
        required: true
    },
    commentaire: {
        type: Array,
        required: true
    }
         
});
let Messages = module.exports = mongoose.model('messages', schemaMessage );


//méthode obtenir un message
module.exports.getMessage = (callback, limit) => {
    Messages.find(callback).limit(limit);
}

//méthode pour obtenir id message
module.exports.getMessageParChamp = (nomChamp, critere, callback) => {
    const query = {[nomChamp]: RegExp(critere)};
    console.log(query);
    Messages.find(query, callback);
}

// méthode pour ajouter un message à la BD
module.exports.ajoutMessage = (message, callback) => {
    message._id = new mongoose.Types.ObjectId();
    console.log(message);
    Messages.create(message, callback);
}

// méthode pour supprimer un message dans la BD
module.exports.supprimerMessage = (idMessage, callback) => {
    let filtre = { "_id": idMessage };
    Messages.deleteOne(filtre, callback);
};

// méthode pour modifier un message dans la BD
module.exports.modifierMessage = (idMessage, nouvMessage, callback) => {
    let filtre = { "_id": idMessage };
    let options = { };
    let nouveauMessage = {
        auteur: nouvMessage.auteur,
        titre: nouvMessage.titre,
        description: nouvMessage.description,
        langue: nouvMessage.langue,
        date: nouvMessage.date,
        commentaire: nouvMessage.commentaire
    };
    Messages.findOneAndUpdate(filtre, nouveauMessage, options, callback);
};
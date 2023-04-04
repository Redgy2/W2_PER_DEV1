/*
*Redgy Pérard
*3 avril 2023
*index.js
*connecte dans la bd d'atlas 
*/

const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.set('strictQuery',false);
mongoose.connect('mongodb+srv://Redgy:perard22@servicesdev1.g6on3lk.mongodb.net/services_DEV1');

app.use(express.json());

const db = mongoose.connection;
db.on('error', (err) => {
    console.error('erreur de BD:', err);
});
db.once('open', () => {
    console.log('Connexion à la BD OK!!!');
});

app.use('/', require('./routes/index.js'));
app.use('/api/messages', require('./routes/apiMsg'));


app.listen(8000);

console.log('Service Web fonctionnel sur port 8000');

const mongoose = require('mongoose');

const URI= 'mongodb://localhost/petshop';

mongoose.connect(URI, {useNewUrlParser: true})
    .then(db => console.log('DataBase Conectada'))
    .catch(err => console.error(err))

module.export = mongoose;
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;

const { mongoose } = require('../config/database');

//Settings

app.set('port', port);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/productos', require('./routes/product.router')); 
app.use('/checkout', require('./routes/checkout.router'));
app.use('/contactos', require('./routes/contacts.router'));

//Static files
app.use(express.static(path.join(__dirname, '..', 'build')));

//Start the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
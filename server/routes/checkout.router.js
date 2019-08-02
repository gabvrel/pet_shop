const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer');

const Check = require('../models/checkout');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'gabvrel@gmail.com',
           pass: 'amoamifamilia180295'
       }
   });

const mailOptions = {
    from: 'gabvrel@gmail.com', // sender address
    to: '', // list of receivers
    subject: 'PetsDom', // Subject line
    html: ''// plain text body
  };

const mailtoClient = (email, name, price, products) => {
    mailOptions.to = `${email}`;
    let products_name = [];
    let regex1 = /,/gi;
    let regex2 = /;/gi;
    products.forEach((element) => {
      return products_name.push(`${element.name} <b>${element.price} USD</b>;`)
    });
    mailOptions.html= `<div> 
    <h1>${name} Gracias por su Compra!</h1>
    <p>El costo total de su compra es de ${price}USD</p>
    <p>Usted a comprado:</p>
    <p>${products_name.join().replace(regex1, '').replace(regex2, '<br/>')}</p>
    <b>Estaremos pronto en Contacto con Usted</b>
    </div>`
    transporter.sendMail(mailOptions, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info);
   });
};
const mailtoAdmin = (name, price, phone, dir, email, products) => {
    mailOptions.to = 'gabvrel@gmail.com';
    mailOptions.html= `<div> 
    <h1>Nueva Compra Registrada</h1>
    <h3>Datos del Comprador</h3>
    <p>Nombre: ${name}</p>
    <p>Precio: ${price}USD</p>
    <p>Telefono: ${phone}</p>
    <p>Correo: ${email}</p>
    <p>Direccion: ${dir}</p>
    <b>Contactese lo mas pronto posible con el cliente</b>
    </div>`
    transporter.sendMail(mailOptions, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info);
   });
};

router.post('/', async (req  , res)=>{
    const {dir, price, name, phone, email, products} = req.body;
    let products_id = [];
    products.forEach((element) => {
      return products_id.push(element._id)
    });
    let products_str = products_id.join();
    const check = new Check({dir, price, name, phone, email, products_str});
    await check.save();
    mailtoClient(email, name, price, products);
    mailtoAdmin(name, price, phone, dir, email, products);
});

module.exports = router;
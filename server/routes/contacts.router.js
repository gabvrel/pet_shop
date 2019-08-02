const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer');

const Contact = require('../models/contacts');

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

const mailtoClient = (name, email) => {
    mailOptions.to = `${email}`;
    mailOptions.html= `<div> 
    <h1>${name} Gracias por contactarnos!</h1>
    <p>Pronto estaremos en contacto con usted</p>
    </div>`
    transporter.sendMail(mailOptions, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info);
   });
};
const mailtoAdmin = (name, phone, email, coments) => {
    mailOptions.to = 'gabvrel@gmail.com';
    mailOptions.html= `<div> 
    <h1>Nuevo Comentario</h1>
    <h3>Datos del Usuario</h3>
    <p>Nombre: ${name}</p>
    <p>Telefono: ${phone}</p>
    <p>Correo: ${email}</p>
    <p>Comentario: ${coments}</p>
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
    const { name, phone, email, coments} = req.body;
    const contact = new Contact({ name, phone, email, coments});
    await contact.save();
    mailtoClient( name, email);
    mailtoAdmin(name, phone, email, coments);
});

module.exports = router;
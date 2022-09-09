
const emailer = require('../config/emailer');
const { response, request } = require('express');


  const enviarMail =  ( req = request, res = response ) => {

    const registro = req.body;

    console.log( req.body );
    

        emailer.sendMail(registro)
        emailer.sendMailPropio(registro)
        
     return res.json({
        ok: true,
        msg: 'correo enviado'
    })

    
    
}


module.exports = enviarMail
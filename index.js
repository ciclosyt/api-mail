const express = require('express');
require('dotenv').config();

//app express

const app = express();

const port = process.env.PORT || 3000;

//directorio publico

app.use( express.static('public') );


//body

app.use( express.json({ extended: false }) );

app.use('/api', require('./routes/mail'))


//manejador de rutas
app.get( '*', (req, res) => {

    res.sendFile( path.resolve(__dirname, 'public/index.html') )

} )


app.listen( port, () => {
    console.log(`Servidor corriendo en puerto ${ port }`);
    
} )
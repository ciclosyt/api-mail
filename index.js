const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

//app express

const app = express();

const port = process.env.PORT || 3000;

//directorio publico

app.use( express.static('public') );

//cors

app.use(cors());

//body

app.use( express.json() );

app.use('/api', require('./routes/mail'))


//manejador de rutas
app.get( '*', (req, res) => {

    res.sendFile( path.resolve(__dirname, 'public/index.html') )

} )


app.listen( port, () => {
    console.log(`Servidor corriendo en puerto ${ port }`);
    
} )
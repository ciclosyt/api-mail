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

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//body

app.use( express.json({ extended: false}) );

app.use('/api', require('./routes/mail'))


//manejador de rutas
app.get( '*', (req, res) => {

    res.sendFile( path.resolve(__dirname, 'public/index.html') )

} )


app.listen( port, () => {
    console.log(`Servidor corriendo en puerto ${ port }`);
    
} )
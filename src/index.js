// Importing Libraries
const express = require('express');
const bodyparser = require('body-parser');

// Defining Server/Port/Hostname
const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const HOSTNAME1 = process.env.HOSTNAME1 || '127.0.0.1';

// Query setting
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// Controllers
require('./app/controllers/index')(app);


// Test route
app.get('/test', (req, res) => {
    res.send('Test OK')
});

// Activating Server
app.listen(PORT, HOSTNAME1, () => {
    console.log(`Server is listening at http://${HOSTNAME1}:${PORT}`)
})


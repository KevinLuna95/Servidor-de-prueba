const express = require('express');
const app = express();

const {videogames} = require('./data.json');

app.get('/', (req,res) =>{
    res.send('My first server with Express on Node.Js')
});

app.post('/videogames', (req,res) =>{
    res.send(videogames);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`The server is listening at port: ${PORT}`)
});
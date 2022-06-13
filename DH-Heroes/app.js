const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.listen(3030, () => {
    console.log('Servidor corriendo');
});

app.get('/', (req,res) => {
    let homepath = path.join(__dirname, './views/index.html')
    res.sendFile(homepath);
});

app.get('/babbage', (req,res) => {
    let babbagepath = path.join(__dirname, './views/babbage.html')
    res.sendFile(babbagepath);
});

app.get('/berners-lee', (req,res) => {
    let bernerspath = path.join(__dirname, './views/berners-lee.html')
    res.sendFile(bernerspath);
});

app.get('/clarke', (req,res) => {
    let clarkepath = path.join(__dirname, './views/clarke.html')
    res.sendFile(clarkepath);
});

app.get('/hamilton', (req,res) => {
    let hamiltonpath = path.join(__dirname, './views/hamilton.html')
    res.sendFile(hamiltonpath);
});

app.get('/hopper', (req,res) => {
    let hopperpath = path.join(__dirname, './views/hopper.html')
    res.sendFile(hopperpath);
});

app.get('/lovelace', (req,res) => {
    let lovepath = path.join(__dirname, './views/lovelace.html')
    res.sendFile(lovepath);
});

app.get('/turing', (req,res) => {
    let turingpath = path.join(__dirname, './views/turing.html')
    res.sendFile(turingpath);
});
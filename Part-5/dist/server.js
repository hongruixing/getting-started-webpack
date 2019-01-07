const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/assets/bundle.js', (req, res) => res.sendFile(path.join(__dirname + '/assets/bundle.js')));
app.get('/assets/main.css', (req, res) => res.sendFile(path.join(__dirname + '/assets/main.css')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const publicPath = path.join('public');
const port = process.env.PORT || 3001;

app.use(express.static('./build'));

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
 });

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });
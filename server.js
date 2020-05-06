const path = require('path');
const express = require('express');
const app = express();
// const publicPath = path.join('public');
const port = process.env.PORT || 3000;

app.use(express.static('./build/static'));

app.get('*', (req, res) => {
    res.sendFile('./build/index.html');
 });

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });
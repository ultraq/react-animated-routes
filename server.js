'use strict';

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('dist'));

const serveIndex = (request, response) => {
	response.sendFile(path.resolve(__dirname, 'index.html'));
};

app.get('/', (request, response) => {
	response.redirect('/a');
});
app.get('/a', serveIndex);
app.get('/b', serveIndex);
app.get('/c', serveIndex);

app.listen(port, () => {
	console.log(`Demo app listening on port ${port}...`); // eslint-disable-line
});

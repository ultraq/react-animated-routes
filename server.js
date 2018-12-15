'use strict';

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('dist'));
app.get('/', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, () => {
	console.log(`Demo app listening on port ${port}...`); // eslint-disable-line
});

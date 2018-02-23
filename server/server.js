const express = require('express');
const morgan = require('morgan');
const axios=require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

// axios
//     .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
//     .then(response => response.data)
//     .then(topspots => this.setState({ topspots }));

module.exports = app;

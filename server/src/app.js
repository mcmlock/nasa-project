const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

// Router Imports 
const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/*', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})
app.use('/planets', planetsRouter);
app.use('/launches', launchesRouter);

module.exports = app;
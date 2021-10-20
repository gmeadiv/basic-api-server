'use strict';

const express = require('express');
const { food } = require('./models');

const app = express();

const PORT = process.env.PORT;

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const error404 = require('./error-handlers/404.js');
const error500 = require('./error-handlers/500.js');
const {postFood} = require('./routes/food.js');

app.use(express.json());
app.use(logger);
// app.use(validator);

// GETS ALL FOOD ITEMS
app.get('/food', async (request, response) => {
  let recordData = await food.findAll();
  response.send(recordData);
});

// GETS ONE SINGLE FOOD ITEM
app.get('/food/:id', () => {});

// CREATES FOOD ITEM
app.post('/food', postFood);

// FINDS AND UPDATES FOOD ITEM
app.put('/food/:id', () => {});

// FINDS AND DELETES FOOD ITEM
app.delete('/food/:id');

app.use(error404);
// app.use(error500);

module.exports = {
  server: app,
  start: app.listen(PORT, () => {
    console.log('server is running on', PORT);
  }),
};
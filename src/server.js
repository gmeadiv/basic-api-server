'use strict';

const express = require('express');
const { food } = require('./models');

const app = express();

const PORT = process.env.PORT;

// GETS ALL FOOD ITEMS
app.get('/food', async (request, response) => {
  let recordData = await food.findAll();
  response.send(recordData);
});

// GETS ONE SINGLE FOOD ITEM
app.get('/food/:id', () => {});

// CREATES FOOD ITEM
app.post('/food/', () => {});

// FINDS AND UPDATES FOOD ITEM
app.put('/food/:id', () => {});

// FINDS AND DELETES FOOD ITEM
app.delete('/food/:id', () => {});

module.exports = {
  server: app,
  start: app.listen(PORT, () => {
    console.log('server is running on', PORT);
  }),
};
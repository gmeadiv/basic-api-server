'use strict';

const express = require('express');
const { phrases } = require('../models');

const app = express();

app.get('/phrase', async (request, response) => {
  let phraseData = await phrases.findAll();
  response.send(phraseData)
})

app.get('/phrase/:id', () => {});
app.post('/phrase/', () => {});
app.put('/phrase/:id', () => {});
app.delete('/phrase/:id', () => {});

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log('server is running on', port);
    });
  }
};
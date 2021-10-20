'use strict'

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const PhraseModel = require('./phrase.js');

console.log(process.env.NODE_ENV, '<-- NODE_ENV -<<');

let DATABASE_URL = process.env.DATABASE_URL;

const sequelizeInstance = new Sequelize(DATABASE_URL);

const phraseTable = PhraseModel(sequelizeInstance, DataTypes);

module.exports = {
  db: sequelizeInstance,
  phrases: phraseTable,
};
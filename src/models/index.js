'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const FoodModel = require('./food.js');

console.log(process.env.NODE_ENV, '<-- NODE_ENV -<<');

let DATABASE_URL = process.env.DATABASE_URL;

const sequelizeInstance = new Sequelize(DATABASE_URL);

const foodTable = FoodModel(sequelizeInstance, DataTypes);

module.exports = {
  db: sequelizeInstance,
  food: foodTable,
};
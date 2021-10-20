'use strict';

const { food } = require('../models/index.js');

console.log(food, '<-- THIS IS FOOD -<<')

async function postFood(request, response) {
  try {
    console.log(request.body, '<-- POST REQUEST DOT BODY -<<');
    const foodInfo = request.body;
    const newFood = await food.create(foodInfo);
    console.log(newFood, '<-- NEW FOOD -<<');
  } catch (error) {
    console.log(error, 'post food error');
  }
}

async function deleteFood(request, response) {
  console.log(request, '<-- DELETE REQUEST -<<');
}

module.exports = {postFood, deleteFood};
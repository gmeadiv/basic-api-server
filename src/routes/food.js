'use strict';

const { food } = require('../models/index.js');

async function findFood(request, response) {
  const id = parseInt(request.params.id);

  try {
    const foundFood = await food.findAll({});
    foundFood.map(item => {
      if (item.id === id) {
        response.send(item);
        console.log(item, '<-- HERE\'S YOUR BOOK -<<');
      }
    });
  } catch (error) {console.log('NO FOOD FOUND');}
}

async function postFood(request, response) {
  try {
    console.log(request.body, '<-- POST REQUEST DOT BODY -<<');
    const foodInfo = request.body;
    const newFood = await food.create(foodInfo);
    console.log(newFood.id, '<-- NEW FOOD ID -<<');
  } catch (error) {
    console.log('POST FOOD ERROR');
  }
}

async function deleteFood(request, response) {
  console.log(request, '<-- DELETE REQUEST -<<');
}

module.exports = {postFood, deleteFood, findFood};
'use strict';

const { food } = require('../models/index.js');

async function findFood(request, response) {
  const id = parseInt(request.params.id);



  try {
    const foundFood = await food.findOne({where: {id}});
    response.send(foundFood);
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
  const id = parseInt(request.params.id);

  try {
    await food.destroy(request.params);
    console.log('FOOD DESTROYED');
  } catch (error) {console.log('NO FOOD TO DELETE');}
}

module.exports = {postFood, deleteFood, findFood};
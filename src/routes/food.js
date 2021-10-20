'use strict';

const { food } = require('../models/index.js');

async function findFood(request, response) {
  const id = parseInt(request.params.id);

  try {
    const foundFood = await food.findOne({where: {id}});
    console.log(foundFood);

    if (foundFood === null) {
      response.status(500).send('NO FOOD FOUND');
      console.log('NO FOOD FOUND');
    } else {
      response.send(foundFood);
      console.log(foundFood);
    }

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
    const foundFood = await food.findOne({where: {id}});
    console.log(foundFood, '<-- EXISTS -<<');
    food.destroy({where: {id}});
    console.log(foundFood, 'FOOD DESTROYED');
    response.status(200).send(200)
  } catch (error) {console.log('NO FOOD FOUND');}
}

module.exports = {postFood, deleteFood, findFood};
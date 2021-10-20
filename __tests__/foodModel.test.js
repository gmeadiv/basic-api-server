'use strict';

const { db, food } = require('../src/models');

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

xdescribe('Testing sequelize model', () => {
  it('Should be able to create a food item', async () => {
    let newFood = await food.create({
      food: 'some food',
      title: 'new food',
    });

    console.log(newFood.food, '<-- NEW food DOT food -<<');
    expect(newFood.id).toBe(1);
    expect(newFood.food).toBe('some food');
  });
});
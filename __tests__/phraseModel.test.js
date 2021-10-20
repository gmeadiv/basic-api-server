'use strict';

const { db, phrases } = require('../models');

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

xdescribe('Testing sequelize model', () => {
  it('Should be able to create a phrase', async () => {
    let newPhrase = await phrases.create({
      words: 'some words',
      title: 'new phrase',
    });

    console.log(newPhrase.words, '<-- NEW PHRASE DOT WORDS -<<');
    expect(newPhrase.id).toBe(1);
    expect(newPhrase.words).toBe('some words');
  });
});
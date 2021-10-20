'use strict';

const { db } = require('../models');
const supertest = require('supertest');
const app = require('../app');
const request = supertest(app.server);

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('Testing our express server', () => {
  it('should fetch all phrases on GET /Phrase', async () => {
    const response = await request.get('/phrase');

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(0)
  });
});
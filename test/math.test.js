const request = require('supertest');
const app = require('../src/app');

describe('GET /api/add', () => {
  it('should return sum of two numbers', async () => {
    const res = await request(app).get('/api/add?a=2&b=3');
    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toBe(5);
  });
});
import request from 'supertest';
import { app } from '../src/server';

let token = '';

beforeAll(async () => {
    const res = await request(app)
    .post('/auth')
    .query({ 
      "username": "basic-thomas",
      "password": "sR-_pcoow-27-6PAwCD8"
    })
    token = res.body.token;
});

describe('Simple post test using auth', () => {
    test.only('should respond with a 200 status code', async () => {
        const response = await supertest(app)
        .post('/tests/simple')
        .set('Authorization', `Bearer ${token}`);

        expect(response.statusCode).toBe(200);
    })
})

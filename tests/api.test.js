import request from 'supertest';
import app from '../src/server';

const fetch = require('node-fetch');

let token, status;


beforeAll(async () => {

    const apiBase = 'http://0.0.0.0:3000/auth';

    const params = { 
        "username": "basic-thomas",
        "password": "sR-_pcoow-27-6PAwCD8"
    }

    const response = await fetch(apiBase, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: { 'Content-Type': 'application/json' }
    })

    console.log()

     const body = await response.json();
     status = response.status;
     token = body.token
   
  });
  

describe('Get auth', () => {
    it('should get /auth', async () => {
        expect(status).toBe(200);    
    })
});

describe('Simple post movie',  () => {

    it('should respond with a 200 status code', async () => {

    const res = await request(app)
        .post('/movies')
        .set('Authorization', `Bearer ${token}`)
        .send({ title: 'coda' })
        expect(res.statusCode).toBe(200);
    })
})


describe('Get Movoes', () => {
    it('should get /movies', async () => {
      const res = await request(app)
        .get('/movies')
        .query({ userId: 123 })
      expect(res.statusCode).toEqual(200);
    })
  });


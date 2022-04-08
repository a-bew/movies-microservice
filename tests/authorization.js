import request from 'supertest';
import app from '../src/server';


describe('Get Root', () => {
    it('should get /', async () => {
      const res = await request(app)
        .get('/')
      expect(res.statusCode).toEqual(200);
    })
  });

  
let token = '' || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywibmFtZSI6IkJhc2ljIFRob21hcyIsInJvbGUiOiJiYXNpYyIsImlhdCI6MTY0OTQxMzQ5OCwiZXhwIjoxNjQ5NDE1Mjk4LCJpc3MiOiJodHRwczovL3d3dy5uZXRndXJ1LmNvbS8iLCJzdWIiOiIxMjMifQ.e-VzJoAxP9R1ihVftd_ZltI7JJYM6Svt3J1xGTK3Lw8';


const { expect } = require("chai");
const query = { 
    "username": "basic-thomas",
    "password": "sR-_pcoow-27-6PAwCD8"
  }

beforeAll(async () => {
    const res = await request(app)
    .post("/auth")
   .set('Content-type', 'application/json')
   .send({ query })
//    .expect(200);
    //   console.log("res", res)
    token = res.body.token;

    console.log("token", token)

    describe('Simple post test using auth', () => {
        test.only('should respond with a 200 status code', async () => {
            const response = await request(app)
            .post('/movies')
            .set('Authorization', `Bearer ${token}`)
            .query({ title: '' })
            expect(response.statusCode).toBe(200);
        })
    })
    
});


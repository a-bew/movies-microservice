import request from 'supertest';
import app from '../src/server';
import { postMovies } from '../src/services/tests/service.getMovies';
import { getToken } from '../src/services/tests/service.getToken';

let token, status;

beforeAll( async () => {

    const response = await getToken();

    const body = await response.json();

    status = response.status;

    token = body.token;

});
  

describe('Get auth', () => {
    test('should get /auth', async () => {
        expect(status).toBe(200);    
    })
});

describe('Simple post movie',  () => {

    test('should respond with a 200 status code', async () => {

    // const res = await request(app)
    //     .post('http://0.0.0.0:7000/movies')
    //     .set('Authorization', `Bearer ${token}`)
    //     .send({ title: 'coda' })

        const response = await postMovies(token);

        expect(response.status).toBe(200);

    })
})


describe('Get Movoes', () => {
    test('should get /movies', async () => {
      const res = await request(app)
        .get('/movies')
        .query({ userId: 123 })
      expect(res.statusCode).toEqual(200);
    })
  });


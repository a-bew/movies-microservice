import request from 'supertest';
import app from '../src/server';


describe('Get Root', () => {
    it('should get /test', async () => {
      const res = await request(app)
        .get('/movies')
        .query({ userId: 123 })
      expect(res.statusCode).toEqual(200);
    })
  });

import request from 'supertest';
import app from '../src/server';

const fetch = require('node-fetch');

const params = { 
    "username": "basic-thomas",
    "password": "sR-_pcoow-27-6PAwCD8"
}

describe('Get Root', () => {
    it('should get /dsas', async () => {
    try {

                const response = await request(app)
            .post('/auth')
            .query(params)
            expect(response.statusCode).toBe(200);

    } catch (error) {

        console.log(error.message)

    }
    
})
});



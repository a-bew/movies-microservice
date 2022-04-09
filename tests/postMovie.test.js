import request from 'supertest';
import app from '../src/server';
const fetch = require('node-fetch');

const apiBase = 'http://0.0.0.0:3000/auth';

const params = { 
    "username": "basic-thomas",
    "password": "sR-_pcoow-27-6PAwCD8"
}
  
let token = "";

const getToken = ()=>{

    return new Promise(async (resolve, reject)=>{
        try {
            
            const response = await fetch(apiBase, {
                method: 'POST',
                body: JSON.stringify(params),
                headers: { 'Content-Type': 'application/json' }
            })
        
            const data = await response.json();

            token = data.token;

            return resolve(token)
        
        } catch (error) {

            reject(error)
            
        }
    })
};

describe('Simple post movie',  () => {

    it('should respond with a 200 status code', async () => {

        // console.log("token", token);
    const token = await getToken();
    const res = await request(app)
        .post('/movies')
        .set('Authorization', `Bearer ${token}`)
        .send({ title: 'coda' })
        expect(res.statusCode).toBe(200);


    })
})
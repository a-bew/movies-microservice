import request from 'supertest';
import app from '../src/server';

// post.js
const fetch = require('node-fetch');

async function getPosts(userId) {
  const response = await fetch(
    `${userId}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

module.exports = {
  getPosts,
};


// test('return a list of posts by a user', () => {

//     const userId = 1;
//     return getPosts(userId).then((data) => {
//       expect(data.length).toBeGreaterThan(0);
//       data.forEach((post) => {
//         expect(post).toEqual(
//           expect.objectContaining({
//             userId,
//           })
//         );
//       });
//     });

//   });

  

describe('Shortener URLS List', () => {
    it('should get api/list', async () => {
      const res = await request(app)
        .get('/movies')
        .query({ userId: 123 })
        expect(res.statusCode).toEqual(200);
        // expect(res.text).toEqual('[{"hash":"06LAze","short":"http://127.0.0.1:8000/06LAze","long":"http://www.google.com","hit":0}]');
        
    })
});

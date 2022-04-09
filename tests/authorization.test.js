const fetch = require('node-fetch');

const apiBase = 'http://0.0.0.0:3000/auth';

const params = { 
    "username": "basic-thomas",
    "password": "sR-_pcoow-27-6PAwCD8"
}

describe('Get auth', () => {
    it('should get /auth', async () => {

        
      
        const response = await fetch(apiBase, {
            method: 'POST',
            body: JSON.stringify(params),
            headers: { 'Content-Type': 'application/json' }
        })

        expect(response.status).toBe(200);

    
    })
});



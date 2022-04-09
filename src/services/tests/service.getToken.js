import fetch from 'node-fetch';

export const getToken = ()=>{

    const apiBase = 'http://0.0.0.0:7000/auth';

    const params = { 
        "username": "basic-thomas",
        "password": "sR-_pcoow-27-6PAwCD8"
    }


    return new Promise( async (resolve, reject)=>{

        try {

            const response = await fetch(apiBase, {
                method: 'POST',
                body: JSON.stringify(params),
                headers: { 'Content-Type': 'application/json' }
            })
        
            return resolve(response)

        } catch (error) {

            reject(error);

        }
    })        
}

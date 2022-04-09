import fetch from 'node-fetch';




export const postMovies = (token)=>{

    const apiBase = 'http://0.0.0.0:7000/movies';

    return new Promise( async(resolve, reject)=>{

        try {
         
            const response = await fetch(apiBase, {
                method: 'POST',
                body: JSON.stringify({ title: 'coda' }),
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                 }
            })

            return resolve(response);

        } catch (error) {
            
            reject(error)
        }            

    })
 }

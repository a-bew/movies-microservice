import fetch from 'node-fetch';


export const getMovies = ({userId})=>{

    const apiBase = 'http://0.0.0.0:7000/movies?'+ new URLSearchParams({userId});

    return new Promise( async(resolve, reject)=>{

        try {
            const response = await fetch(apiBase, {
                method: 'GET',
                headers: { 
                    'Content-Type': 'application/json',
                 }
            })

            return resolve(response);

        } catch (error) {
            
            reject(error)
        }            

    })
 }

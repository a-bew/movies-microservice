const { RESTDataSource, HTTPCache } = require('apollo-datasource-rest');

//  http://www.omdbapi.com/?i=tt3896198&apikey=851d839a&t=coda

class MovieApi extends RESTDataSource {
  
  constructor() {
    super();
    this.apiKey = '851d839a';
    this.i="tt3896198";
    this.baseURL ='http://www.omdbapi.com';
    this.httpCache = new HTTPCache()
  }
  
  api(movieTitle){ 
      return `?i=${this.i}&apikey=${this.apiKey}&t=${movieTitle}`
  }

  async getMovie(currency, currency2){
    return new Promise(async (resolve, reject)=>{
      try {          
        const endpoint = this.api(currency, currency2); 

        const response =  await this.get(
          endpoint, null,
          {cacheOptions: (response, request) => { // note that response is the first argument
            return { ttl: 60*60*24 }  // Expire in 1 day
           }}
          );

        console.log("response", response)

        if (!response.hasOwnProperty("Response")){
          return reject({message: response["Error"]})
        }
        
        resolve(this.process(response));

      } catch (error) {
          console.log(error)
          reject({message: error.message})
      }    

    })
  }

  process({Title, Released, Genre, Director}){
  
      return { Title, Released, Genre, Director};
        
  }

}

export default MovieApi;
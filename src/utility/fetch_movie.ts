import { RESTDataSource, HTTPCache } from 'apollo-datasource-rest';
import { CustomError } from './misc_functions';

const { APIKEY, I } = process.env;

interface MovieObject {
  Title:string, Released:string, Genre:string, Director:string
}

class MovieApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://www.omdbapi.com';
    this.httpCache = new HTTPCache();
  }

  api(movieTitle: string) {
    return `?i=${I}&apikey=${APIKEY}&t=${movieTitle}`;
  }

  async getMovie(movie:string) {
    const endpoint = this.api(movie);

    const response = await this.get(endpoint, undefined, {
      cacheOptions: () => { // (response:any, request:any)
        return { ttl: 60 * 60 * 24 }; // Expire in 1 day
      },
    });

    if (!Object.prototype.hasOwnProperty.call(response, 'Response')) {
      //response.Error;
      throw new CustomError("Request failed. Please try again");
    }

    return this.process(response);
  }

  process(
    {
      Title, Released, Genre, Director,
    } : MovieObject,
  ) {
    return {
      Title, Released, Genre, Director,
    };
  }
}

export default MovieApi;

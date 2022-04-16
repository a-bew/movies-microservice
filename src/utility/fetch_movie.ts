import { RESTDataSource, HTTPCache } from 'apollo-datasource-rest';

const { APIKEY, I } = process.env;

interface MovieObject {
  Title:string, Released:string, Genre:string, Director:string
};

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

      try {

        const endpoint = this.api(movie);

        const response = await this.get(endpoint, undefined, {
          cacheOptions: (response:any, request:any) => {
            return { ttl: 60 * 60 * 24 }; // Expire in 1 day
          },
        });

        if (!Object.prototype.hasOwnProperty.call(response, 'Response')) {
          throw response['Error']
        }

        return this.process(response);

      } catch (error) {

        throw error;

      }

  }

  process({ Title, Released, Genre, Director }:MovieObject) {

    return { Title, Released, Genre, Director };

  }

}


export default MovieApi;

import fetch from 'node-fetch';
import { CustomError } from '../../src/utility/custom_error';

type RequestParams = {
  token: string, 
  title: string
}

export default async ({token, title}:RequestParams) => {
  
  const apiBase = 'http://0.0.0.0:7000/movies';

    try {
      const response = await fetch(apiBase, {
        method: 'POST',
        body: JSON.stringify({ title }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return response

    } catch (error:any) {

      throw new CustomError("An Error has occurred. Please try again");

    }

};

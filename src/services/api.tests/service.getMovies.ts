import fetch from 'node-fetch';
import { CustomError } from '../../utility/misc_functions';

export default async ({ token }:any) => {

  const apiBase =
    'http://0.0.0.0:7000/movies';

    try {
      const response = await fetch(apiBase, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return response;

    } catch (error:any) {

      throw new CustomError("An Error has occurred. Please try again");

    }
};

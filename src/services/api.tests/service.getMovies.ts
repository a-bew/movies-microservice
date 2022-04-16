import fetch from 'node-fetch';

export default async ({ userId }:any) => {

  const apiBase =
    'http://0.0.0.0:7000/movies?' + new URLSearchParams({ userId });

    try {
      const response = await fetch(apiBase, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response;

    } catch (error:any) {

      throw new Error(error.message);

    }
};

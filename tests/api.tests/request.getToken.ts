import fetch from 'node-fetch';
import { CustomError } from '../../src/utility/custom_error';

export default async (params:object) => {
  const apiBase = 'http://0.0.0.0:7000/auth';
  
  try {
    const response = await fetch(apiBase, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: { 
        'Content-Type': 'application/json'
      },
    });
    return response;
  } catch (error:any) {
    throw new CustomError("An Error has occurred. Please try again");
  }
};

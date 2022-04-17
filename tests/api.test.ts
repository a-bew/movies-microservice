import postMovies from './api.tests/request.postMovies';
import getMovies from './api.tests/request.getMovies';
import getToken from './api.tests/request.getToken';

const params:object = {
  username: 'basic-thomas',
  password: 'sR-_pcoow-27-6PAwCD8',
};

const premiumParams:object = {
  username: 'premium-jim',
  password: 'GBLtTyq3E_UNjFnpo9m6',
};

let token:string;
let status:number;
let tokenPremium:string;
let statusPremium:number;

beforeAll(async () => {
  const basic_user_response = await getToken(params);

  const premium_user_response = await getToken(premiumParams);

  const bodyBasic = await basic_user_response.json();

  const bodyPremium = await premium_user_response.json();

  status = basic_user_response.status;

  token = bodyBasic.token;

  statusPremium = basic_user_response.status;

  tokenPremium = bodyPremium.token;
});

describe('Get basic auth', () => {
  test('should get basic /auth', async () => {
    expect(status).toBe(200);
  });
});

describe('Get premium auth', () => {
  test('should get premium /auth', async () => {
    expect(statusPremium).toBe(200);
  });
});

describe('Basic Simple post movie', () => {
  test('should respond with a 200 status code', async () => {
    const title = 'coda';
    const response = await postMovies({ token, title });
    expect(response.status).toBe(200);
  });
});

describe('Premium post movie', () => {
  test('should respond with a 200 status code', async () => {
    const title = 'coda';
    const response = await postMovies({ token: tokenPremium, title });
    expect(response.status).toBe(200);
  });
});

describe('Basic Post 4 movies', () => {
  test('should respond with a 200 status code', async () => {
    const add4Movies = [
      { token, title: 'Morbius' },
      { token, title: 'RRR' },
      { token, title: 'King Richard' },
      { token, title: 'The Power of the Dog' },

    ];
    const responses = await Promise.all(add4Movies.map((item) => postMovies(item)));
    const result = responses.every((res) => res.status === 200);
    expect(result).toEqual(true);
  });
});

describe('Basic Post 1 movies', () => {
  test('should respond with a 402 status code', async () => {
    const title = 'The Power of the Dog';
    const response = await postMovies({ token, title });
    expect(response.status).toBe(402);
  });
});

describe('Premium Post 6 movies', () => {
  test('should respond with a 200 status code', async () => {
    const add5Movies = [
      { token: tokenPremium, title: 'Morbius' },
      { token: tokenPremium, title: 'RRR' },
      { token: tokenPremium, title: 'King Richard' },
      { token: tokenPremium, title: 'Deep Water' },
      { token: tokenPremium, title: 'The Power of the Dog' },
      { token: tokenPremium, title: 'The Bubble' },

    ];
    const responses = await Promise.all(add5Movies.map((item) => postMovies(item)));
    const result = responses.every((res) => res.status === 200);
    expect(result).toEqual(true);
    expect(responses[responses.length - 1].status).toBe(200);
  });
});

describe('Get Movies belonging to an authorized simple user', () => {
  test('should get /movies', async () => {
    const response = await getMovies({ token });
    expect(response.status).toBe(200);
  });
});

describe('Get Movies belonging to an authorized premium user', () => {
  test('should get /movies', async () => {
    const response = await getMovies({ token: tokenPremium });
    expect(response.status).toBe(200);
  });
});

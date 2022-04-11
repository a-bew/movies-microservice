import { postMovies } from "../src/services/tests/service.postMovies";
import { getMovies } from "../src/services/tests/service.getMovies";
import { getToken } from "../src/services/tests/service.getToken";

let token, status;

beforeAll(async () => {
  const response = await getToken();

  const body = await response.json();

  status = response.status;

  token = body.token;
});

describe("Get auth", () => {
  test("should get /auth", async () => {
    expect(status).toBe(200);
  });
});

describe("Simple post movie", () => {
  test("should respond with a 200 status code", async () => {

    const response = await postMovies(token);

    expect(response.status).toBe(200);
  });
});

describe("Get Movoes", () => {
  test("should get /movies", async () => {
    const response = await getMovies({ userId: 123 });

    expect(response.status).toEqual(200);
  });
});

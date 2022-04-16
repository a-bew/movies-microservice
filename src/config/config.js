import path from 'path';
import dotenv from 'dotenv';

dotenv.config({
  path: path.resolve(`.env.${process.env.NODE_ENV}`),
});

const {
  USERNAME, PASSWORD, HOST, DIALECT, PORT, TEST_DATABASE, DEV_DATABASE,
} = process.env;

export default {
  development: {
    username: USERNAME,
    password: PASSWORD,
    database: DEV_DATABASE,
    host: HOST,
    dialect: DIALECT,
    port: PORT,
  },

  test: {
    username: USERNAME,
    password: PASSWORD,
    database: TEST_DATABASE,
    host: HOST,
    dialect: DIALECT,
    port: PORT,
  },

};

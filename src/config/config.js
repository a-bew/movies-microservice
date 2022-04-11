const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.resolve(`.env.${process.env.NODE_ENV}`),
});

const {
  USERNAME,
  PASSWORD,
  HOST,
  DIALECT,
  PORT,
  NODE_ENV,
  TEST_DATABASE,
  DEV_DATABASE,
} = process.env;

if (NODE_ENV !== "development") {

  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};
  console.debug = () => {};

}


module.exports = {
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

  // "production": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_production",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // }
};

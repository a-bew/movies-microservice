const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
	path: path.resolve(`.env.${process.env.NODE_ENV}`)
})

const {USERNAME, PASSWORD, DATABASE, HOST, DIALECT, PORT } = process.env;

console.log(path.resolve(`.env.${process.env.NODE_ENV}`), process.env.NODE_ENV)

module.exports = {
  "development": {
    "username": USERNAME,
    "password": PASSWORD,
    "database": DATABASE,
    "host": HOST,
    "dialect": DIALECT,
     port: PORT
  },

  "test": {
    "username": USERNAME,
    "password": PASSWORD,
    "database": DATABASE,
    "host": HOST,
    "dialect": DIALECT,
    "port": PORT
  },

  // "production": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_production",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // }

}
// const db = require('../config/db.config.js');
var db = require("../../models");
const Movie = db.Movie;

export const getUserMovie = async (userId) => {

    try {
      const movies = await Movie.findAll({
        where: {
          userId: userId,
        },
      });

      return movies;

    } catch (error) {

      return { status: 500, message: error.message };

    }

  };


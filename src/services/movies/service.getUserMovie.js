// const db = require('../config/db.config.js');
var db = require("../../models");
const Movie = db.Movie;
const User = db.User;

export const getUserMovie = async (userId) => {
    try {

      const user = await User.findOne({
        where: {
          userId,
        },
        include: [
          {
            model: Movie,
            required: false,
            as: "movies",
          },
        ],
      });

      return user && user.movies;



    } catch (error) {

      throw new Error(error.message)

    }
  };


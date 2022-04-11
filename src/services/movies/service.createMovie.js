// const db = require('../config/db.config.js');
var db = require("../../models");
const User = db.User;
const Role = db.Role;
const Movie = db.Movie;

export const moviePost = async (movie)  => {

    const { Title, Released, Genre, Director, userId, name, role } = movie;

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

      if (user) {
        const movie = await Movie.create({
          title: Title,
          release: Released,
          genre: Genre,
          director: Director,
        });

        await user.addMovie(movie);

        // console.log("result", result);
      } else {
        await User.create(
          {
            userId: userId,
            name: name,
            role: {
              name: role,
            },
            movies: [
              {
                title: Title,
                release: Released,
                genre: Genre,
                director: Director,
              },
            ],
          },
          {
            include: [
              {
                model: Role,
                as: "role",
              },
              {
                model: Movie,
                as: "movies",
              },
            ],
          }
        );
      }

      return { message: `Movie ${Title} Added Successfully` }

    } catch (error) {

      throw new Error(error.message)

    }
};

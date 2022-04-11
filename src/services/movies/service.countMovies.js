// const db = require('../config/db.config.js');
var db = require("../../models");
const Movie = db.Movie;
const User = db.User;

const canPostMovies = async (req, res, next)=>{

    try {

      const { userId, role } = req;

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

    if (role === "basic" && user?.movies?.length>5 ){

        const error = "You have exceeded 5 movies. Become a premium user for unlimited plan";

        next(res.status(402).json({ status: 402, message:error }));
        return;

      } else {

        next();
        return;

      }



    } catch (error) {
    
      return res.status(500).json({ status: 500, message: error.message });
    }
  
  }
  

  module.exports = canPostMovies;

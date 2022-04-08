// const db = require('../config/db.config.js');
var db = require('../../models');
const { getUserMovie } = require('../../services/movies/service.getUserMovie');

exports.getMovies = async (req, res) => {
    
  console.log("req.params", req.query)
    const { userId } = req.query;

    try {

      const movies = await getUserMovie(userId);

      res.status(200).json(movies);

    } catch (error) {

      console.log("error message", error.message);

      res.status(500).json({message: error.message});

    }

}
  

const { getUserMovie } = require("../../services/movies/service.getUserMovie");

exports.getMovies = async (req, res) => {

  const { userId } = req.query;

  try {
    
    const movies = await getUserMovie(userId);

    res.status(200).json(movies);

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
};

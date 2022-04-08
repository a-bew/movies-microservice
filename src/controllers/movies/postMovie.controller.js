const { moviePost } = require('../../services/movies/service.createMovie');
const { default: MovieApi } = require('../../utility/fetch_movie');

const movieApi = new MovieApi() 

exports.postMovies = async (req, res)=>{
  
    try {

        const {userId, name, role } = req;

        const { title } = req.body;

        const { Title, Released, Genre, Director, } = await movieApi.getMovie(title);

        const { message } = await moviePost({ Title, Released, Genre, Director, userId, name, role })

        res.status(200).json({message: message})

    } catch (error) {

        console.log(error.message);
        
        res.status(500).json({status: 500, message: error.message})

    }
  
}
  
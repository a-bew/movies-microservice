import countMovies from '../../db/movies/service.countMovies';
import logger from '../../utility/logger';

const canPostMovies = async (req:any, res:any, next:any)=>{

    try {

      const { userId, role } = req;

      const moviesLength = await countMovies(userId);

    if (role === 'basic' && moviesLength>4 ){

        const error = 'You have exceeded 5 movies. Become a premium user for unlimited plan';
        logger.error(`402 - ${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        res.status(402).json({ error });

      } else {

        next();

      }

    } catch (error:any) {
      logger.error(`${error.status || 500} - ${res.statusMessage} - ${error.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);    
      res.status(500).json({ error: "An error has occurred. Please try again" });
    }
  
  }
  

  export default canPostMovies;

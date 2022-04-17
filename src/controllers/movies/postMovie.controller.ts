import moviePost from '../../db/movies/service.createMovie';
import MovieApi from '../../utility/fetch_movie';
import logger from '../../utility/logger';

const movieApi = new MovieApi();

export default async (req:any, res:any) => {

  try {
    const { userId, name, role } = req;

    const { title } = req.body;
  
    const { Title, Released, Genre, Director } = await movieApi.getMovie(title);

    const { message } = await moviePost({
      Title,
      Released,
      Genre,
      Director,
      userId,
      name,
      role,
    });

    res.status(200).json({ message });
  } catch (error:any) {
    logger.error(`${error.status || 500} - ${res.statusMessage} - ${error.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(500).json({ error: "An error has occurred. Please try again" });
  }
};

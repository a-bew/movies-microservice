import moviePost from '../../services/movies/service.createMovie';
import MovieApi from '../../utility/fetch_movie';

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

    res.status(200).json({ message: message });

  } catch (error:any) {

    res.status(500).json({ status: 500, message: error.message });

  }
};

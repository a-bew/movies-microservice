import db from '../../models';
import { CustomError } from '../../utility/custom_error';

const User = db.User;
const Role = db.Role;
const Movie = db.Movie;

type PostObject = {
  Title:string, 
  Released:string, 
  Genre:string, 
  Director:string, 
  userId:string|number, 
  name:string, 
  role:string 
}

export default async (movie:PostObject)  => {
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
          as: 'movies',
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
              as: 'role',
            },
            {
              model: Movie,
              as: 'movies',
            },
          ],
        }
      );
    }

    return { 
      message: `Movie ${Title} Added Successfully` 
    }
    
  } catch (error:any) {

    throw error;

  }
};

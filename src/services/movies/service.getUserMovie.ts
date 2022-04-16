import db from '../../models';
const Movie = db.Movie;
const User = db.User;

export default async ( userId : string|number ) => {
  
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
    
    return user && user.movies;

  } catch (error:any) {
    
    throw new Error(error.message)
  
  }

};


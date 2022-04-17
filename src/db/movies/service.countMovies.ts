import db from '../../models';
import { CustomError } from '../../utility/custom_error';

const Movie = db.Movie;
const User = db.User;

const countMovies = async (userId:string|number)=>{

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

      return user && user?.movies?.length || 0

    } catch (error:any) {
    
      throw error;

    }
  
  }
  

  export default countMovies;

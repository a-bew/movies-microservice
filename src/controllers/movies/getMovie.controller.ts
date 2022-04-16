import getUserMovie from '../../services/movies/service.getUserMovie';
import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {

  const userId:any = req.query.userId;

  try {
    
    const movies = await getUserMovie(userId);

    res.status(200).json(movies);

  } catch (error:any) {

    res.status(500).json({ message: error.message });

  }

};

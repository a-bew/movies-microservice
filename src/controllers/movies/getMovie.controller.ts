import getUserMovie from '../../services/movies/service.getUserMovie';
import { Request, Response } from 'express';

export default async (req: any, res: Response) => {

  const userId:any = req.userId;

  try {
    
    const movies = await getUserMovie(userId);

    res.status(200).json(movies);

  } catch (error:any) {

    res.status(500).json({ status:500, error: "An error has occurred. Please try again" });

  }

};

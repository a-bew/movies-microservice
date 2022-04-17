import getUserMovie from '../../db/movies/service.getUserMovie';
import { Request, Response } from 'express';
import logger from '../../utility/logger';

export default async (req: any, res: Response) => {

  const userId:any = req.userId;

  try {
    
    const movies = await getUserMovie(userId);

    res.status(200).json(movies);

  } catch (error:any) {

    logger.error(`${error.status || 500} - ${res.statusMessage} - ${error.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(500).json({ error: "An error has occurred. Please try again" });

  }

};

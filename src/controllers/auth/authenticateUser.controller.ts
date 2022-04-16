import { Request, Response, NextFunction } from 'express';
import authImport from '../../services/auth/service.auth';

const { JWT_SECRET } = process.env;

if (!JWT_SECRET) throw new Error('Missing JWT_SECRET env var. Set it and restart the server');

const auth = authImport.authFactory(JWT_SECRET);

export default async (req: Request, res: Response, next: NextFunction)=>{

  try {

    if (!req.body) {
      return res.status(400).json({ error: 'invalid payload' });
    }

    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'invalid payload' });
    }

    try {

      const token = auth(username, password);

      return res.status(200).json({ token });

    } catch (error:any) {

      if (error instanceof authImport.AuthError) {

        return res.status(401).json({ error: error.message });

      }

      return next(error);

    }

  } catch (error:any) {

    return res.status(500).json({ status: 500, message: error.message });

  }

};

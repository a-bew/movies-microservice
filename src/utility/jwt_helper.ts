import '../config/config';
import { Response, NextFunction } from 'express';
import createError from 'http-errors';
import JWT from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET as string;

class VerifyToken {
  verifyAccessToken(req:any, res:Response, next:NextFunction) {
    if (!req.headers.authorization) return next(new createError.Unauthorized());

    const token = req.headers.authorization.split(' ')[1];

    JWT.verify(token, SECRET, (err:any, payload:any) => {
      if (err) {
        return next(new createError.Unauthorized());
      }

      const { userId, name, role } = payload;

      req.userId = userId;
      req.name = name;
      req.role = role;

      return next();
    });
    return null;
  }
}

export default VerifyToken;

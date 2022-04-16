import '../config/config';
import createError from 'http-errors';

var JWT = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

class VerifyToken {
  verifyAccessToken(req:any, res:any, next:any) {
    if (!req.headers['authorization']) return next(new createError.Unauthorized());

    var token = req.headers.authorization.split(' ')[1];

    JWT.verify(token, SECRET, (err:any, payload:any) => {

      if (err) {
        return next(new createError.Unauthorized());
      }

      const { userId, name, role } = payload;
      console.log('Passed', token, SECRET);

      req.userId = userId;
      req.name = name;
      req.role = role;

      next();
    });
  }
}

export default VerifyToken;

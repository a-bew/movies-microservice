import '../src/config/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from 'morgan';
import helmet from 'helmet';
import compression from 'compression';

import VerifyToken from './utility/jwt_helper';
import getAuth from './routes/auth/auth.routes';
import postRoutes from './routes/movies/authorizedUser.routes';
import getRoutes from './routes/movies/getMovies.routes';
import canPostMovies from './controllers/movies/canPostMovies.controller';
import winsLogger from './utility/logger';
import createHttpError from 'http-errors';
import winston from 'winston';

const PORT = process.env.APP_PORT || 3000;
const app = express();
const verifier = new VerifyToken();

app.set('trust proxy', 1);
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/auth', getAuth);
app.use('/movies', verifier.verifyAccessToken, getRoutes);
app.use('/movies', verifier.verifyAccessToken, canPostMovies,  postRoutes); 

app.use(async (req, res, next) => {
  next(new createHttpError.NotFound())
})

app.use((err:any, req:any, res:any, next:any)=>{
  winsLogger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  res.status(err.status || 500)

  res.json({
    error: err.message,
  })
})

if (process.env.NODE_ENV !== 'production') {
  winsLogger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`auth svc running at port ${PORT}`);
    winsLogger.info(`Server svc running at port ${PORT}`)
  });
}


export default app;

import '../src/config/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from 'morgan';
import helmet from 'helmet';
import compression from 'compression';

import VerifyToken from './utility/jwt_helper';
import canPostMovies from './services/movies/service.countMovies';
import getAuth from './routes/auth/auth.routes';
import postRoutes from './routes/movies/authorizedUser.routes';
import getRoutes from './routes/movies/getMovies.routes';

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
app.use('/movies', getRoutes);
app.use('/movies', verifier.verifyAccessToken, canPostMovies,  postRoutes); 
app.use((error:any, _:any, res:any, __:any) => {
  console.error(
    `Error processing request ${error}. See next message for details`
  );
  console.error(error);
  return res.status(500).json({ error: 'internal server error' });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`auth svc running at port ${PORT}`);
  });
}

export default app;

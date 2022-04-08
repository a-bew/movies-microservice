require('../src/config/config');

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import logger from 'morgan'
import VerifyToken from './utility/jwt_helper';

const getAuth = require('./routes/auth/auth.routes');
const postRoutes = require("./routes/movies/authorizedUser.routes")
const getRoutes = require('./routes/movies/getMovies.routes');

// import { router as getRoutes } from './routes/get.routes';

const PORT = process.env.APP_PORT || 3000
const app = express()
const verifier = new VerifyToken();

app.use(cors()); 

app.use(logger('dev'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/auth", getAuth);

app.use("/movies", getRoutes);

app.use("/movies", verifier.verifyAccessToken, postRoutes);  // :collection

app.use((error, _, res, __) => {

  console.error(
    `Error processing request ${error}. See next message for details`
  );
  console.error(error);
  return res.status(500).json({ error: "internal server error" });

});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`auth svc running at port ${PORT}`);
  });
  
}



  
export default app
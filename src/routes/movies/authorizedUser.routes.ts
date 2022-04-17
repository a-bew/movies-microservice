import express from 'express';

import postMovies from '../../controllers/movies/postMovie.controller';

const router = express.Router();

router.post('/', postMovies); // Only Authorized User can post movies

export default router;

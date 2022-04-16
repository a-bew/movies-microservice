import express from 'express';
const router = express.Router();

import postMovies from '../../controllers/movies/postMovie.controller';

router.post('/', postMovies); // Only Authorized User can post movies

export default router;

import { Router } from 'express';
import getMovies from '../../controllers/movies/getMovie.controller';

const router = Router();


router.get('/', getMovies); // Only Authorized User can post movies

export default router;

import { Router } from "express";
const router = Router();

const controllers = require("../../controllers/movies/getMovie.controller");

router.get("/", controllers.getMovies); // Only Authorized User can post movies

module.exports = router;

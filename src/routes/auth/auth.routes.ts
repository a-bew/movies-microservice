import express from 'express';
import authenticateUser from '../../controllers/auth/authenticateUser.controller';
const router = express.Router();

router.post("/", authenticateUser); // Only Authorized User can post movies

export default router;

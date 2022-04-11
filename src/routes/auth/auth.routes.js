import express from "express";
const router = express.Router();

const controllers = require("../../controllers/auth/authenticateUser.controller.js");

router.post("/", controllers.authenticateUser); // Only Authorized User can post movies

module.exports = router;

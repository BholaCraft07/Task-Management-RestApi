import express from 'express';
import { signUp, login, logout } from '../controller/user.controller.js'; //import the user controller functions
const router = express.Router();

//signup route
router.post("/signup", signUp)

//login route
router.post("/login", login)

//logout route
router.post("/logout", logout)

export default router;
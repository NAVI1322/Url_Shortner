import { Router } from "express";
import { loginUser, createUser } from "../controllers/userController.js";

const router = new Router();

router.post('/register', createUser);

router.post('/login', loginUser);

export default router;

import { Router } from "express";
import user from "./user.js"
import auth from "./auth/authHandler.js"

const router = new Router();

router.use("/user", user)
router.use("/auth", auth)

export default router;


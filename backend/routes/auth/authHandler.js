import { Router } from "express";
import jwt from 'jsonwebtoken'
import prisma from "../../config/db.js"

const router = new Router();

router.get("/signup", async (req, res) => {
  const newUser = await prisma.user.create({
    data: {
      name: 'samnit',
      email: 'samnit@example.com',
    }
  })
  res.send({ data: "new user created", newUser })
})

router.get("/signin", (req, res) => {
  res.send({ data: "you are in signin" })
})
export default router;

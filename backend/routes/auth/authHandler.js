import { Router } from "express";
import jwt from 'jsonwebtoken'
import prisma from "../../config/db.js"

const router = new Router();

router.get("/signup", async (req, res) => {
  const newUser = await prisma.user.create({
    data: {
      firstname: 'xyz',
      lastname: 'abc',
      email: 'syz@example.com',
      password: '1234',
    }
  })
  res.send({ data: "new user created", newUser })
})

router.get("/signin", (req, res) => {
  res.send({ data: "you are in signin" })
})
export default router;

import bcrypt from "bcrypt";
import prisma from "../config/db.js";
import jwt from 'jsonwebtoken';

const JWT_SECRET = "ultra-strong-secret-512-BIT-encryption"

const hashPass = async (plainPass) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(plainPass, salt);
  return hash
}

const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '8h' })
}

const createUSer = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    const userExits = await prisma.user.findUnique({
      where: {
        email: email,
      }
    });

    if (userExits) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = await prisma.user.create({
      data: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: await hashPass(password),
      }
    })

    const token = generateToken(newUser.id)
    res.status(201).json({ token })
  } catch (error) {
    console.error("Error creating new user", err)
  }
}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(401).json({ error: "Invalid Email or password" })
    }

    const passMatch = await bcrypt.compare(password, user.password)

    if (!passMatch) {
      return res.status(401).json({ error: "Invalid Email or password" })
    }

    const token = generateToken(user.id);

    res.status(200).json({ token })

  } catch (error) {
    console.error("Error loggin in user", err)
    res.status(500).json({ err: "Internal server error" })
  }
}

export default { loginUser, createUSer }

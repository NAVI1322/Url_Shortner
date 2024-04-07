import bcrypt from "bcrypt";
import prisma from "../config/db.js";

const saltRound = 10;

const hashPass = async (plainPass) => {
  const salt = await bcrypt.genSalt(saltRound);
  const hash = await bcrypt.hash(plainPass, salt);

  return hash
}

const findByEmail = async (email) => {
  return prisma.user.findUnique({
    where: {
      email: email,
    },
  });
}

const createUser = async ({ firstname, lastname, email, password }) => {
  return prisma.user.create({
    data: {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: await hashPass(password),
    }
  })
}

export default { findByEmail, createUser }

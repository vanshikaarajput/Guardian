const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");

const registerUser = async (userData) => {
  const { name, email, password, phone } = userData;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      phone,
    },
  });

  return user;
};

module.exports = {
  registerUser,
};
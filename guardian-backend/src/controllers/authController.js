const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

const registerUser = async (req, res) => {
  const { name, email, password, phone } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "Please provide all required fields",
    });
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
  return res.status(400).json({
    message: "User already exists",
  });
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

return res.status(201).json({
  message: "User registered successfully",
  user: {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
       } ,
    });

 };

module.exports = {
  registerUser,
};

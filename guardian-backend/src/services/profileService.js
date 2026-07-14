// Create Prisma Client
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// ==========================
// Get User Profile
// ==========================
const getUserProfile = async (userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      createdAt: true,
    },
  });

  return user;
};

// ==========================
// Update User Profile
// ==========================
const updateUserProfile = async (userId, profileData) => {
  const { name, phone } = profileData;

  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name,
      phone,
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      createdAt: true,
    },
  });

  return user;
};

module.exports = {
  getUserProfile,
  updateUserProfile,
};
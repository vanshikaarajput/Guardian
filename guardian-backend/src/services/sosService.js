// Create Prisma Client
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create SOS Alert
const createSOSAlert = async (userId, sosData) => {
  const { latitude, longitude } = sosData;

  const sos = await prisma.sOSAlert.create({
    data: {
      latitude,
      longitude,
      userId,
    },
  });

  return sos;
};

// Get all SOS Alerts of a user
const getSOSHistory = async (userId) => {
  const sosAlerts = await prisma.sOSAlert.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return sosAlerts;
};

module.exports = {
  createSOSAlert,
  getSOSHistory,
};

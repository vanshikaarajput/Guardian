// Create Prisma Client
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// ==========================
// Create SOS Alert
// ==========================
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

module.exports = {
  createSOSAlert,
};

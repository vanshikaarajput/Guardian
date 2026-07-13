// Create Prisma Client
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// ==========================
// Create Contact
// ==========================
const createContact = async (userId, contactData) => {
  const { name, phone, relation } = contactData;

  const contact = await prisma.emergencyContact.create({
    data: {
      name,
      phone,
      relation,
      userId,
    },
  });

  return contact;
};

// ==========================
// Get All Contacts
// ==========================
const getContacts = async (userId) => {
  const contacts = await prisma.emergencyContact.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return contacts;
};

// ==========================
// Update Contact
// ==========================
const updateContact = async (contactId, userId, contactData) => {
  const result = await prisma.emergencyContact.updateMany({
    where: {
      id: contactId,
      userId,
    },
    data: contactData,
  });

  return result;
};

// ==========================
// Delete Contact
// ==========================
const deleteContact = async (userId, contactId) => {
  const contact = await prisma.emergencyContact.findFirst({
    where: {
      id: contactId,
      userId,
    },
  });

  if (!contact) {
    return null;
  }

  await prisma.emergencyContact.delete({
    where: {
      id: contactId,
    },
  });

  return contact;
};

module.exports = {
  createContact,
  getContacts,
  updateContact,
  deleteContact,
};
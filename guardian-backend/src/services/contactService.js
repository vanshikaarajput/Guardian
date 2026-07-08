// Create Prisma Client
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create a new emergency contact
const createContact = async (userId, contactData) => {

    //extract data
  const { name, phone, relation } = contactData;

  //save to database - prisma inserts a new row to emerg contact table
  const contact = await prisma.emergencyContact.create({
    data: {
      name,
      phone,
      relation,
      userId,
    },
  });


  //return the contact - controller w use this to send the response
  return contact;
};

// Get all emergency contacts of a user
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


const updateContact = async (contactId, userId, contactData) => {
  const contact = await prisma.emergencyContact.updateMany({
    where: {
      id: contactId,
      userId,
    },
    data: contactData,
  });

  return contact;
};


module.exports = {
  createContact,
  getContacts,
  updateContact,
};
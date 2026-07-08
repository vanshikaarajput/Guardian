//addidng comments so that ik what im doing

//create prisma client - communication with postgresqldb
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//create servicefun - keeps the service indep of express
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

module.exports = {
  createContact,
};
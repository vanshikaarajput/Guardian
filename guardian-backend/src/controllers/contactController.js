const { createContact } = require("../services/contactService");

const addContact = async (req, res) => {
  try {

    //we rcv data from postman
    const { name, phone, relation } = req.body;

    if (!name || !phone || !relation) {

        //validate input
      return res.status(400).json({
        message: "Please provide all required fields",
      });
    }


    //calls the service : controller doesnot talk to prisma directly 
    //rather follows a clean arch - route controller - service - prisma - db

    const contact = await createContact(req.user.userId, {
      name,
      phone,
      relation,
    });

    return res.status(201).json({
      message: "Emergency contact added successfully",
      contact,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  addContact,
};
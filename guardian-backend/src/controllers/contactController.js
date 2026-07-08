const {
  createContact,
  getContacts,
} = require("../services/contactService");

const addContact = async (req, res) => {
  try {
    // Receive data from Postman
    const { name, phone, relation } = req.body;

    // Validate input
    if (!name || !phone || !relation) {
      return res.status(400).json({
        message: "Please provide all required fields",
      });
    }

    // Create the contact
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

const getAllContacts = async (req, res) => {
  try {
    const contacts = await getContacts(req.user.userId);

    return res.status(200).json({
      success: true,
      count: contacts.length,
      contacts,
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
  getAllContacts,
};
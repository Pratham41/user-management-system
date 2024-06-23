const CONTACT_SERVICE = require("../services/contactService");

const addContact = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    console.log(req.user);
    const { name, phoneNumber, isSpam } = req.body;
    const contact = await CONTACT_SERVICE.addContact(userId, {
      name,
      phoneNumber,
      isSpam,
    });
    res.status(201).json(contact);
  } catch (error) {
    console.log(error);
    logger.error(`Error adding contact: ${err.message}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const contactController = {
  addContact,
};
module.exports = contactController;

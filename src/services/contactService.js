// src/services/contactService.js
const prisma = require("../config/db");

const addContact = async (userId, contactData) => {
  console.log(userId, contactData);
  const contact = await prisma.contact.create({
    data: {
      ...contactData,
      userId,
    },
  });
  return contact;
};
const contactService = {
  addContact,
};
module.exports = contactService;

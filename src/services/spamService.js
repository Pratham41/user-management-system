const prisma = require("../config/db");

const markAsSpam = async (userId, phoneNumber) => {
  const contact = await prisma.contact.findFirst({
    where: {
      userId,
      phoneNumber,
    },
  });

  if (contact) {
    await prisma.contact.update({
      where: { id: contact.id },
      data: { isSpam: true },
    });
  } else {
    await prisma.contact.create({
      data: {
        userId,
        phoneNumber,
        isSpam: true,
        name: "Spam Number",
      },
    });
  }
};

const spamService = {
  markAsSpam,
};

module.exports = spamService;

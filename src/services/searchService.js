const prisma = require("../config/db");

const searchByPhoneNumber = async (phoneNumber, userId) => {
  const registeredUser = await prisma.user.findUnique({
    where: { phoneNumber },
    include: { contacts: true },
  });

  if (registeredUser) {
    const isInSearchersContacts = await prisma.contact.findFirst({
      where: {
        userId: userId,
        phoneNumber: registeredUser.phoneNumber,
      },
    });

    const result = {
      name: registeredUser.name,
      phoneNumber: registeredUser.phoneNumber,
      email: isInSearchersContacts ? registeredUser.email : null,
      spamLikelihood: await calculateSpamLikelihood(phoneNumber),
    };

    return [result];
  }

  const contacts = await prisma.contact.findMany({
    where: { phoneNumber },
  });

  const results = contacts.map((contact) => ({
    name: contact.name,
    phoneNumber: contact.phoneNumber,
    email: null,
    spamLikelihood: calculateSpamLikelihood(phoneNumber),
  }));

  return results;
};

const searchByName = async (name, userId) => {
  const startingWithResults = await prisma.user.findMany({
    where: {
      name: {
        startsWith: name,
        mode: "insensitive",
      },
    },
    include: { contacts: true },
  });

  const containingResults = await prisma.user.findMany({
    where: {
      name: {
        contains: name,
        mode: "insensitive",
      },
    },
    include: { contacts: true },
  });

  const combinedResults = [
    ...new Set([...startingWithResults, ...containingResults]),
  ];

  const results = await Promise.all(
    combinedResults.map(async (user) => {
      const isInSearchersContacts = await prisma.contact.findFirst({
        where: {
          userId: userId,
          phoneNumber: user.phoneNumber,
        },
      });
      return {
        name: user.name,
        phoneNumber: user.phoneNumber,
        email: isInSearchersContacts ? user.email : null,
        spamLikelihood: await calculateSpamLikelihood(user.phoneNumber),
      };
    })
  );

  return results;
};

const calculateSpamLikelihood = async (phoneNumber) => {
  const contacts = await prisma.contact.findMany({
    where: { phoneNumber },
  });

  const spamCount = contacts.filter((contact) => contact.isSpam).length;
  const totalCount = contacts.length;

  if (totalCount === 0) return 0;

  return `${Math.round((spamCount / totalCount) * 100)}%`;
};

const searchService = {
  searchByName,
  searchByPhoneNumber,
};

module.exports = searchService;

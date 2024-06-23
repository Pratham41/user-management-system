const prisma = require("../config/db");

const getUserProfile = async (userId) => {
  return await prisma.user.findUnique({
    where: { id: userId },
    include: { contacts: true },
  });
};

const updateUserProfile = async (userId, updateData) => {
  return await prisma.user.update({
    where: { id: userId },
    data: updateData,
  });
};

const profileService = {
  getUserProfile,
  updateUserProfile,
};

module.exports = profileService;

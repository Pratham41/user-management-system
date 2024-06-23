const bcrypt = require("bcryptjs");
const prisma = require("../config/db");
const { generateToken } = require("../utils/jwt");

const createUser = async (name, phoneNumber, password, email) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, phoneNumber, password: hashedPassword, email },
  });
  const token = generateToken(user);
  return { user, token };
};

const loginUser = async (phoneNumber, password) => {
  const user = await prisma.user.findUnique({ where: { phoneNumber } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid phone number or password");
  }
  const token = generateToken(user);
  return { user, token };
};

const authSevice = {
  createUser,
  loginUser,
};
module.exports = authSevice;

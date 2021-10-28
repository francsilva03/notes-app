const User = require("../models/User");

const createAdminUser = async function () {
  const userFound = await User.findOne({ email: "facs01@localhost" });

  if (userFound) return;

  const newUser = new User({
    username: "admin",
    email: "facs01@localhost",
  });

  newUser.password = await newUser.encryptPassword("adminpassword");

  const admin = await newUser.save();

  console.log("Admin user created", admin);
};

module.exports = createAdminUser;
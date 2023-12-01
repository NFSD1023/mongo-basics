const User = require("../models/User");

const userController = {
  getAllUsers: async (req, res) => {
    console.log("Llamando a getAllUsers");
    const userList = await User.find();
    console.log(userList);
    res.json(userList);
  },
  getUserBy: async (req, res) => {
    console.log("Llamando a getUserBy");
    const criteria = req.body.searchString;
    const userByList = await User.find({ name: criteria });
    res.json(userByList);
  },
  addUser: async (req, res) => {
    console.log("Llamando a addUser");

    const userToAdd = new User({
      id: 2,
      name: "Ana",
      age: 50,
      email: "ana@nuclio.school",
    });

    await userToAdd.save();
    res.send("Usuario agregado");
  },
};

module.exports = userController;

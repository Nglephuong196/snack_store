// const db = require('../database/connection')
// const User = db.User;
const UserRepository = require('../repositories/userRepository')
const userRepository = new UserRepository()

exports.findAll = async (req, res) => {
  try {
    const listUser = await userRepository.getAll()
    res.send(listUser)
  } catch (e) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  }
};

exports.create = async (req, res) => {
  try {

    if (!req.body.name) {
      res.status(400).send({
        message: "Name can not be empty!"
      });
      return;
    }

    const user = {
      name: req.body.name,
      email: req.body.email,
      avatar: req.body.avatar,
      gender: req.body.gender
    };

    const createdUser = await userRepository.create(user)
    res.send(createdUser)

  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Tutorial."
    });
  }

}






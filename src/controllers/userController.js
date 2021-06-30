
const UserRepository = require('../repositories/userRepository')
const userRepository = new UserRepository()
const UserTokenRepository = require('../repositories/userTokenRepository')
const userTokenRepository = new UserTokenRepository()

exports.findAll = async (req, res) => {
  try {
    const listUser = await userRepository.getAll()
    res.send(listUser)
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  }
};

exports.signup = async (req, res) => {
  try {

    if (!req.body.name) {
      res.status(400).send({
        message: "Name can not be empty!"
      });
      return;
    }

    let listSameUserInDb = await userRepository.getAllByConditions({email: req.body.email})
    if (listSameUserInDb.length !== 0) {
      res.status(400).send({
        message: "Email is existed!"
      });
      return;
    }

    const user = {
      name: req.body.name,
      email: req.body.email,
      avatar: req.body.avatar,
      gender: req.body.gender,
      password: req.body.password
    };

    const createdUser = await userRepository.create(user)
    const token = await userTokenRepository.generateAuthToken(createdUser)
    res.status(201).send({ createdUser, token })

  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while sign up."
    });
  }
}
  exports.login = async (req, res) => {
    try {
      const user = await userRepository.findByCredentials(req.body.email, req.body.password)
      const token = await userTokenRepository.generateAuthToken(user)
      res.send({ user, token })

    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while log in."
      });
    }
  }

  exports.logout = async (req, res) => {
    try {
      let tokenInDb = await userTokenRepository.removeTokenByValue(req.token)
      res.send(tokenInDb)
    } catch {
      res.status(500).send({
        message:
          err.message || "Some error occurred while log out."
      });
    }
  }








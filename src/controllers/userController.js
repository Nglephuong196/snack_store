const db = require('../database/connection')
const User = db.User;

exports.findAll = (req, res) => {
    User.findAll({  })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

exports.create = (req, res) => {
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
    
      // Save User in the database
      User.create(user)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
        });
}






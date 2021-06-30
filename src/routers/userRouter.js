module.exports = app => {
    const users = require('../controllers/userController')
    var router = require('express').Router()

    router.post("/", users.create);


    router.get("/", users.findAll);

    app.use('/api/users', router);
}
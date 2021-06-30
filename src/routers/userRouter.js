const auth = require('../middlewares/auth')

module.exports = app => {
    const users = require('../controllers/userController')
    var router = require('express').Router()

    router.post("/signup", users.signup);

    router.post("/login", users.login);

    router.get("/", auth, users.findAll);

    app.use('/api/users', router);
}
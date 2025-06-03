const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/user')

router.post("/signUp", UserController.signUp);
router.post('/logIn',UserController.logIn);
router.post('/logout',UserController.logOut)

module.exports = router;
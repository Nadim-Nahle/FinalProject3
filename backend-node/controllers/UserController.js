const { addUser } = require("../services/UserService");
const User = require("../models/user")
const { all } = require('../app/routes')
require("dotenv").config();
const bcrypt = require(`bcryptjs`);
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = process.env.TOKEN_SECRET;
const { validationResult } = require("express-validator/check");

//REGISTER CONTROLLER
async function register(req, res) {
  try {
    //VALIDATING NAME,EMAIL,PASSWORD
    const errors = validationResult(req);

    if (!errors.isEmpty()) {

      return res.status(422).jsonp(errors);

    } else {

      //ENCRYPT THE PASSWORD
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);

      //STORE THE NEW USER
      const addUserResult = await addUser(req.body, hashPassword);
      return res.send({ userId: addUserResult._id });
    }
    //CATCHING ERRORS
  } catch (error) {

    res.status(409).send(error);

  }
}

//EXPORTING MODULES
module.exports = {
  register,
};

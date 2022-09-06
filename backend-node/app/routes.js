const express = require("express");
const {
  register,
  login,
} = require("../controllers/UserController");
const { registerErrors } = require("../middlewares/ErrorsMiddleware");
const router = express.Router();

// ROUTES

//AUTH ROUTES
router.post("/auth/register", registerErrors, register);
router.post("/auth/login", login);

//HOME ROutes
router.post("/auth/addhome", auth, addHome);

module.exports = router;

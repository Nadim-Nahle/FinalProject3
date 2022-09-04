const express = require("express");
const {
  register,
} = require("../controllers/UserController");



// ROUTES

//AUTH ROUTES
router.post("/auth/register", registerErrors, register);

module.exports = router;

const express = require("express");
const { deleteHome } = require("../controllers/HomeController");
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
router.get("/auth/home", auth, getHome);
router.delete("/auth/delete/:id", auth, deleteHome);
router.patch("/auth/movie/update/:id", auth, updateHome);

module.exports = router;

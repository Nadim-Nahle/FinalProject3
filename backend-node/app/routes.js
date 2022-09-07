const express = require("express");
const {
  register,
  login,
} = require("../controllers/UserController");
const { registerErrors } = require("../middlewares/ErrorsMiddleware");
const {
  addHome,
  getHome,
  deleteHome,
  updateHome,
} = require("../controllers/HomeController");
const auth = require("../middlewares/AuthMiddleware");

const router = express.Router();

// ROUTES

//AUTH ROUTES
router.post("/auth/register", registerErrors, register);
router.post("/auth/login", login);

//HOME ROUTES
router.post("/auth/addhome", auth, addHome);
router.get("/auth/home", auth, getHome);
router.delete("/auth/delete/:id", auth, deleteHome);
router.patch("/auth/movie/update/:id", auth, updateHome);

//HOME ROUTES
router.post("/auth/addabout", auth, addAbout);


module.exports = router;

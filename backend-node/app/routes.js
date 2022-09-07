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
const {
  addAbout,
  getAbout,
  deleteAbout,
  updateAbout,
} = require("../controllers/AboutController");
const {
  addRoadmap,
  getRoadmap,
  deleteRoadmap,
  updateRoadmap,
} = require("../controllers/RoadmapController");
const {
  addTeam,
  getTeam,
  deleteTeam,
  updateTeam,
} = require("../controllers/TeamController");
const {
  addFaq,
  getFaq,
  deleteFaq,
  updateFaq,
} = require("../controllers/FaqController");
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

//ABOUT ROUTES
router.post("/auth/addabout", auth, addAbout);
router.get("/auth/about", auth, getAbout);
router.delete("/auth/about/delete/:id", auth, deleteAbout);
router.patch("/auth/about/update/:id", auth, updateAbout);

//ROADMAP ROUTES
router.post("/auth/addroadmap", auth, addRoadmap);
router.get("/auth/roadmap", auth, getRoadmap);
router.delete("/auth/roadmap/delete/:id", auth, deleteRoadmap);
router.patch("/auth/roadmap/update/:id", auth, updateRoadmap);

//ROADMAP ROUTES
router.post("/auth/addteam", auth, addTeam);
router.get("/auth/team", auth, getTeam);
router.delete("/auth/team/delete/:id", auth, deleteTeam);
router.patch("/auth/team/update/:id", auth, updateTeam);

//FAQ ROUTES
router.post("/auth/addfaq", auth, addFaq);
router.get("/auth/faq", auth, getFaq);
router.delete("/auth/faq/delete/:id", auth, deleteFaq);
router.patch("/auth/faq/update/:id", auth, updateFaq);

//NFT ROUTES
router.post("/auth/addnft", auth, addNft);
router.get("/auth/nft", auth, getNft);
router.delete("/auth/nft/delete/:id", auth, deleteNft);

module.exports = router;

const { Router } = require("express");

const {
  placesList,
  createPlace,
  newPlace,
  findPlace,
  updatePlace,
  deletePlace,
} = require("../controllers/place.controlers.js");

const router = Router();

//creé enrutadoradores
router.get("/", placesList);
router.get("/create", createPlace);
router.get("/updates/:id", findPlace);
router.get("/delete/:id", deletePlace);

router.post("/", newPlace);
router.post("/updates", updatePlace);

module.exports = router;

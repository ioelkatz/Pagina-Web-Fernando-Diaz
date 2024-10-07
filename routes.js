const express = require("express");
const router = express.Router();
const pageController = require("./controllers/pageControllers");

router.get("/", pageController.inicio);
router.get("/contacto", pageController.contacto);
router.post("/contacto", pageController.crearUsuario);
router.get("/testimonios", pageController.testimonios);
router.get("/servicios", pageController.servicios);
router.get("/sobre-mi", pageController.sobreMi);

module.exports = router;

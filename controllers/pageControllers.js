const { User } = require("../models/User");

const pageController = {
  inicio: (req, res) => {
    return res.render("inicio");
  },
  contacto: (req, res) => {
    return res.render("contacto");
  },
  crearUsuario: async (req, res) => {
    try {
      const { nombre, email } = req.body;
      await User.create({ nombre, email });
      console.log(req.body);
      return res.redirect("contacto");
    } catch (err) {
      console.error(err);
    }
  },
  servicios: (req, res) => {
    return res.render("servicios");
  },
  testimonios: (req, res) => {
    return res.render("testimonios");
  },
  sobreMi: (req, res) => {
    return res.render("sobre-mi");
  },
};

module.exports = pageController;

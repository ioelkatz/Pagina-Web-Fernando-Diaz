require("dotenv").config();
const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../dataBase");

class User extends Model {
  static async iniciarTablas() {
    await sequelize.sync({ force: true }); // Esto eliminará y recreará la tabla
    console.log("Las Tablas fueron creadas");
  }
}

User.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
      unique: {
        msg: "Este email ya existe"
      },
    },
  },
  { sequelize, modelName: "user" }
);

module.exports = { User };

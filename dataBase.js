require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  }
);

const syncDatabase = async () => {
  try {
    await sequelize.authenticate(); // Verifica que la conexión a la base de datos es exitosa
    console.log("Conexión a la base de datos establecida correctamente.");

    const { User } = require("./models/User"); // Importa el modelo después de la conexión
    await User.iniciarTablas(); // Llama al método para crear las tablas
  } catch (err) {
    console.error("Error al conectar a la base de datos:", err);
  }
};

if (require.main === module) {
  syncDatabase(); // Solo se ejecuta si este archivo es el principal
}

module.exports = { sequelize };

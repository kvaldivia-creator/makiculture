//ARCHIVO DE LA CONEXION DE LA BASE DE DATOS

const mongoose = require("mongoose");

/* process -> metodo global */
const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb://localhost/databasetest";

//conexion a la base de datos
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const conection = mongoose.connection;

conection.once("open", () => {
  console.log("DB is connect");
});

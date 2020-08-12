//ARCHIVO PARA ARRANCAR EL SERVIDOR

/* importa las vriables del sistema operativo */
require("dotenv").config();

const app = require("./app");
require("./database");

const main = async () => {
  /* iniciar el servidor app.listen es un metodo asyncrono*/
  await app.listen(app.get("port"));
  console.log("server on port", app.get("port"));
};

main();

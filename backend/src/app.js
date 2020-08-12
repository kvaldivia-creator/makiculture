//ARCHIVO QUE TENDRA EL CODIGO DEL SERVER
/* express -> nos permite crear un servidor */
const express = require("express");
const cors = require("cors");

/* ejecutar express */
const app = express();

//configurar el servidor app.set(nomb_var, value_var)

app.set("port", process.env.PORT || 4000);

//middleware -> funciones que se ejecutan antes de llegar a las rutas o URLS

app.use(cors);
/* entiendo formatos json y strings */
app.use(express.json());

//routes -> URLS que la aplicacion de rect va visitar

app.get("/api/users", require("./routes/users"));
app.get("/api/notes", require("./routes/notes"));

module.exports = app;

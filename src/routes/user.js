//Se importa el framework Express para manejar las rutas del usuario.
const express = require("express");

// Se importa el esquema de usuario desde el modelo correspondiente.
const userSchema = require("../models/user");

// Se crea un router de Express para manejar las rutas de usuario.
const router = express.Router();

// Ruta para crear un usuario.
router.post("/users", (req, res) => {
  // Se crea un nuevo usuario utilizando el esquema de usuario y los datos del cuerpo de la solicitud.
  const user = userSchema(req.body);
  
  // Se guarda el usuario en la base de datos.
  user.save()
    .then((data) => res.json(data)) // Si se guarda correctamente, se devuelve el usuario creado.
    .catch((error) => res.json({ message: error })); // Si hay un error, se devuelve un mensaje de error.
});

// Se exporta el router para su uso en otras partes de la aplicación.
module.exports = router;
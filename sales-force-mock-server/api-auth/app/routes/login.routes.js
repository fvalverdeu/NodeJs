module.exports = (app) => {
    const login = require('../controllers/login.controller');

    // Obtener usuarios.
    app.get('/auth/list', login.findAll);

    // Obtener usuario por correo.
    app.get('/auth/:username', login.findOne);

    // Restablecer contraseña.
    app.post('/auth/login', login.login);
}
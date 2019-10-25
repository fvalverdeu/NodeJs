const Usuario = require('../models/usuario.model.js');
var Respuesta = require('../models/respuesta.model.js');
const data = require('../repository/data.json');


// Obtener todos los usuarios.
exports.findAll = (req, res) => {
   res.send(data)
};

// Buscar un único usuario por su correo.
exports.findOne = (req, res) => {
    res.send(data.filter(c => {
        return (
            c.username === req.params.username
        )
    }))
};


// Iniciar sesión.
exports.login = (req, res) => {
    res.send(data.filter(c=> {
        return (
            c.username === req.body.username && c.password === req.body.password
        )
    }).map(m => {
       return response = {
            title: "User valid",
            type: 200,
            detail: {
                accessToken: m.accessToken,
                refreshToken: m.refreshToken,
                name: m.username,
                role: m.role,
                country: m.country
            },
            invalidparams: null
        }
    })[0])
};

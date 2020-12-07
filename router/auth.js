/*
    path: api/login
*/

const { Router } = require('express');
const { check } = require('express-validator');

//Controladores
const { crearUsuario, login, renewToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

//Crear nuevos usuarios
router.post('/new', [
    check('nombre', 'El nombre es oblitagorio').not().isEmpty(),
    check('email', 'El email es oblitagorio').isEmail(),
    check('password', 'El password es oblitagorio').not().isEmpty(),
    validarCampos
], crearUsuario);

/**
 nombre: string,
 password: string,
 email: isEmail
 */

//Login
router.post('/', [
    check('email', 'El email es oblitagorio').isEmail(),
    check('password', 'El password es oblitagorio').not().isEmpty(),
    validarCampos
] , login);

//Revalidar Token
router.get('/renew', validarJWT, renewToken);

module.exports = router;
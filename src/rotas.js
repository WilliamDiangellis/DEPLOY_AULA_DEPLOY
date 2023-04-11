const rotas = require('express').Router()
const listar = require('./controlador')

rotas.get('/usuarios', listar)

module.exports = rotas

const rotas = require('express').Router()
const { listar, cadastrar } = require('./controlador')

rotas.get('/usuarios', listar)
rotas.post('/usuarios', cadastrar)

module.exports = rotas

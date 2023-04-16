const rotas = require('express').Router()
const { listar, cadastrar } = require('./controlador')

rotas.get('/usuarios', listar)
rotas.post('/usuarios', cadastrar)
rotas.get('/', (req, res) => res.send('Olá, mundo!'))
module.exports = rotas

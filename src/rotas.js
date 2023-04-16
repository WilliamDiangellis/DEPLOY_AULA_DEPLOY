const rotas = require('express').Router()
const { listar, cadastrar } = require('./controlador')

rotas.get('/usuarios', listar)
rotas.post('/usuarios', cadastrar)
rotas.get('/', (req, res) =>
  res.send('Para cadastrar um usuario, enviar um post para a url/usuarios')
)
module.exports = rotas

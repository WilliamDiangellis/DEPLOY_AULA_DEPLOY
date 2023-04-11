const knex = require('./conexao')
const listar = async (req, res) => {
  const usuarios = await knex('users').select('*')
  res.status(200).json(usuarios)
}

module.exports = listar

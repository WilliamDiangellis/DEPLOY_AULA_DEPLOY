const knex = require('./conexao')
const listar = async (req, res) => {
  const usuarios = await knex('users').select('*')
  res.status(200).json(usuarios)
}

const cadastrar = async (req, res) => {
  const { nome, email } = req.body

  if (!nome) {
    return res.status(400).json('O campo nome é obrigatório')
  }

  if (!email) {
    return res.status(400).json('O campo email é obrigatório')
  }

  try {
    const usuario = await knex('users').insert({ nome, email }).returning('*')

    if (!usuario) {
      return res.status(400).json('O usuário não foi cadastrado')
    }

    return res.status(200).json(usuario)
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

module.exports = {
  listar,
  cadastrar
}

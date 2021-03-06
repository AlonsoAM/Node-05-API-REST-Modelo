const { response, request } = require('express')

const usuariosGet = (req = request, res = response) => {
  const { q, nombre = 'no name', page = 1, limit = 10 } = req.query
  res.json({
    msg: 'get API - Controlador',
    q,
    nombre,
    page,
    limit,
  })
}

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body

  res.json({
    msg: 'post API - Controlador',
    nombre,
    edad,
  })
}

const usuariosPut = (req, res = response) => {
  const { id } = req.params

  res.json({
    msg: 'put API - Controlador',
    id,
  })
}

const usuariosDelete = (req, res = response) => {
  const { id } = req.params
  res.json({
    msg: 'delete API - Controlador',
    id,
  })
}

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
}

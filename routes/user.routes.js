const { Router } = require('express')
const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
} = require('../controllers/user.controller')

const router = Router()

router.get('/', usuariosGet)

router.put('/:id', usuariosPut)

router.post('/', usuariosPost)

router.delete('/:id', usuariosDelete)

module.exports = router

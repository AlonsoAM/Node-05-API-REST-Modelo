const express = require('express')
const cors = require('cors') // Siempre configurar el CORS
const router = require('../routes/user.routes')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.usuariosPath = '/api/usuarios'

    // Middlewares
    this.middlewares()

    // Rutas de mi aplicación
    this.routes()
  }

  middlewares() {
    // CORS
    this.app.use(cors())

    // Parseo y Lectura del body en JSON
    this.app.use(express.json())

    // Directorio público
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.usuariosPath, router)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`)
    })
  }
}

module.exports = Server

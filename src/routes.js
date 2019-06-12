const express = require('express')
const routes = express.Router()
const controllers = require('./app/controllers')

routes.get('/disciplinas', controllers.DisciplinasController.index)

routes.get('/disciplinas/create', controllers.DisciplinasController.create)

routes.get('/disciplinas/:disciplinaId', controllers.DisciplinasController.findById)

routes.post('/disciplinas', controllers.DisciplinasController.store)

routes.get('/disciplinas/delete/:disciplinaId', controllers.DisciplinasController.destroy)

// routes.get('/disciplinas/edit/:disciplinaId', controllers.DisciplinasController.edit)

// routes.post('/disciplinas/:disciplinaId', controllers.DisciplinasController.update)

module.exports = routes;
const express = require('express');
const routes = express.Router();

const OngsController = require('./controllers/OngsController')
const IncidentController = require('./controllers/IncidentController')

routes.get('/ongs', OngsController.index)
routes.post('/ongs', OngsController.create)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)


module.exports = routes

const express = require('express');

const OngCOntroller = require('./Controllers/OngController');
const IncidentCOntroller = require('./Controllers/IncidentController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController')


const routes = express.Router();

routes.post('/sessions',SessionController.create);

routes.get('/ongs', OngCOntroller.index);
routes.post('/ongs', OngCOntroller.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentCOntroller.index);
routes.post('/incidents', IncidentCOntroller.create);

routes.delete('/incidents/:id',IncidentCOntroller.delete);
module.exports = routes;
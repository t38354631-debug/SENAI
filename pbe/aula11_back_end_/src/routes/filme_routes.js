const express = require('express');

const routes = express.Router();

const filmesControllers= require('../controllers/filme_controller.js');

const { listar } = require('../controllers/filmes_controller.js');

routes.get("/Listar", filmesControllers.listar);

            
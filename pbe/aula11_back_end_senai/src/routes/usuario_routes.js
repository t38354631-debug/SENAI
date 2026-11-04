const express = require('express');

const routes = express.Router();

const usuarioController = require('../controllers/usuarios_controller.js');

routes.post("/Cadastrar", usuarioController.cadastrar);
routes.get("/Listar", usuarioController.listar);
routes.get("/Buscar/:id", usuarioController.buscar);
routes.delete("/Excluir/:id", usuarioController.excluir);
///

const {cadastrar, listar, buscar, excluir } = require('../controllers/usuarios_controller.js');

routes.post("/Cadastrar", cadastrar);
routes.get("/Listar", listar);
routes.get("/Buscar/:id", buscar);
routes.delete("/Excluir/:id", excluir);
// routes.put("/Atualizar/:id", atualizar);
// routes.delete("/Deletar/:id", deletar);

module.exports = routes;
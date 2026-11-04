const usuario = require("../models/usuario_model.js");

const cadastrar  = async (req, res) => {
    try{
        const { nome, cpf, email, senha} = req.body;

        let retorno = await usuario.cadastrar(req.body);

        res.json(retorno).status(201).end();


    }catch (err){
        res.json({ erro: err.message}).status(500).end();
    }

};

const listar = async (req, res) => {
    try{
        const usuarios = await usuario.listar();

        res.status(200).json(usuarios).end();

    }catch (err) {
        res.status(500).json({erro: err.message}).end();
    }
};
//////////////// buscar

const buscar = async (req, res) => {

    try {
        const id = req.params.id;

        const info = await usuario.buscar(id);

            if(info.length === 0){
                    res.status(404).json({info:  'Usuário não encontrado'}).end();
            }else{
                delete info[0].senha; // Remove a senha do objeto antes de enviar a resposta
                res.status(200).json(info[0]).end();
            }

        }catch (err){
            res.status(500).json({err: err.message}).end();
        }

    };    
////////////////////////// excluir

        const excluir = async (req, res) => {
            try {
                const id = req.params.id;
                const rnullLinhas = await usuario.excluir(id);
                if (rnullLinhas === 0) {
                    res.status(404).json({info: `Usuário não excluido` }).end();
                }else {
                    res.status(204).json({info: 'Usuário excluído com sucesso' }).end();
                }

            } catch (err) {
                res.status(500).json({ erro: err.message }).end();
            }

            
        };


module.exports = {
    cadastrar,
    listar,
    buscar,
    excluir
};


const filmes = require("../controllers/filme_controllers.js");


const listar = async (req, res) => {
    try{
        const filmes = await filmes.listar();

        res.status(200).json(filmes).end();

    }catch (err) {
        res.status(500).json({erro: err.message}).end();
    }
};
const con = require('../config/db.js');

const listar = async() => {

    const [result] = await con.query("SELECT * FROM filmes;");

    return result;

};

module.exports = {
     listar
   // cadastrar,
    //buscar,
    //excluir,
    //  atualizar,
    // alterar
};
//setup
const Sequelize = require("sequelize");
const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());

const conexao = new Sequelize("biblioteca", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

//conexão com o banco
const Emprestimo = conexao.define("emprestimo", {
    titulo_livro: {
        type: Sequelize.STRING
    },
    autor: {
        type: Sequelize.STRING
    },
    genero: {
        type: Sequelize.STRING
    },
    data_emprestimo: {
        type: Sequelize.DATE
    },
    data_devolucao: {
        type: Sequelize.DATE
    }
});

//ROTAS
app.get("/", function (req, res){
    res.send("Página padrão")
});

//index
app.get("/index", function (req, res) {
    res.sendFile(__dirname + "/html/index.html");
});

//create
app.get("/create/:titulo_livro/:autor/:genero/:data_emprestimo/:data_devolucao", async function (req, res) {
    const { titulo_livro, autor, genero, data_emprestimo } = req.params;

    const criarEmprestimo = await Emprestimo.create({ titulo_livro, autor, genero, data_emprestimo, data_devolucao});
  
    res.json({
      resposta: "Emprestimo criado!",
      emprestimo: criarEmprestimo,
    });
});

//mostrar
app.get("/mostrar", async function (req, res) {
    const emprestimo = await Emprestimo.findAll();
    res.json(emprestimo)

});

//update
app.get("/update/:id/:titulo_livro/:autor/:genero/:data_emprestimo/:data_devolucao", async function (req, res) {
    const { id, titulo_livro, autor, genero, data_emprestimo, data_devolucao } = req.params;
    const idNumber = parseInt(id, 10);
  
    const [updated] = await Emprestimo.update(   
      { titulo_livro, autor, genero, data_emprestimo, data_devolucao },
      {
        where: { id: idNumber },
      }
    );
  
    res.json({
      mensagem: "Emprestimo atualizado!",
    });
});

//delete
app.get("/delete/:id", async function (req, res) {
    const { id } = req.params;
    const idNumber = parseInt(id, 10); // Converte o ID para número

    const deleted = await Emprestimo.destroy({
        where: { id: idNumber },
    });
    res.json({
        mensagem: "Emprestimo atualizado!",
      });
});

app.listen(3031, function () {
    console.log("Servidor rodando na porta 3031")
});
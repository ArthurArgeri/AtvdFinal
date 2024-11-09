const Sequelize = require("sequelize");

const conexao = new Sequelize("biblioteca", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

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

//Emprestimo.sync({ force: true }); 

Emprestimo.create({
    titulo_livro: 'Sherlock Holmes: O Cão dos Baskervilles',
    autor: 'Arthur Conan Doyle',
    genero: 'Aventura',
    data_emprestimo: '08-OCT-2024',
    data_devolucao: '28-OCT-2024'
});
Emprestimo.create({
    titulo_livro: 'Sherlock Holmes: O Roubo da Coroa de Berilos',
    autor: 'Arthur Conan Doyle',
    genero: 'Aventura',
    data_emprestimo: '05-Dec-2024',
    data_devolucao: '29-DEC-2024'
});
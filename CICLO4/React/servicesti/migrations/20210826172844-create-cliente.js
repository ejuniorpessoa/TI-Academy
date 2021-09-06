'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clientes', {
      id: {
        allowNull: false, //<-- não permite nulo
        autoIncrement: true, //<-- ele vai gerar o nº automaticamente!
        primaryKey: true, // <-- ID único, não há iguais em tabela Clientes, igual CPF.
        type: Sequelize.INTEGER //<-- Nº inteiro de auto incremento
      },
      nome: {
        type: Sequelize.STRING(50)
      },
      endereco: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
      },
      uf: {
        type: Sequelize.STRING(2)
      },
      nascimento: {
        type: Sequelize.DATEONLY
      },
      createdAt: { // criação do registro
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: { // data de modificação
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Clientes');
  }
};
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ClienteId: { // vem da tabela cliente
        allowNull: false, // para garantir 1 cliente e 1 serviço
        type: Sequelize.INTEGER,
        references:{
          model: 'clientes',
          key: 'id' // campo de referencia  
        },
        onDelete: 'CASCADE',//<-- para exclusao 
        onUpdate: 'CASCADE' //<-- para atualizar tambem na tabela de pedidos
      },
      ServicoId: {//<-- dentro de um grupo, por isso a chave
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:'servicos',
          key: 'id',    
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE', 
      },
      valor: {
        type: Sequelize.FLOAT(6,2)
      },
      data: {
        type: Sequelize.DATEONLY,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pedidos');
  }
};
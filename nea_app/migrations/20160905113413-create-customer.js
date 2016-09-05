'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      due_amount: {
        type: Sequelize.FLOAT
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Customers');
  }
};
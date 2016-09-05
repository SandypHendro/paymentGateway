'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('Customers',
          [
            {name:"John doe", due_amount:100.69},
            {name:"Ram doe", due_amount:100.69},
            {name:"Shyam doe", due_amount:100.69},
            {name:"Hari doe", due_amount:100.69},
            {name:"cool doe", due_amount:100.69}
          ],
          {});

  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Customers', null, {});

  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: { type: Sequelize.STRING, allowNull: false, unique: true },
      price: { type: Sequelize.DECIMAL(4,2), allowNull: false },
      urlImage: { type: Sequelize.STRING, allowNull: false, field: 'url_image', defaultValue: '' },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('products');
  }
};

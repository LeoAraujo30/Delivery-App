module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', { // mudar para singular e primeira letra maiuscula em caso de erro
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    sellerId: { type: DataTypes.INTEGER, allowNull: false },
    deliveryAddress: { type: DataTypes.STRING({ length: 100}), allowNull: false }, //faltando configurar formato decimal
    deliveryNumber: { type: DataTypes.STRING({ length: 50}), allowNull: false },
    saleDate: { type: DataTypes.DATETIME, allowNull: false },
    status: { type: DataTypes.STRING({ length: 50}), allowNull: false },
  }, {
    timestamps: false,
    tableName: 'sales',
    underscored: true,
  });

  Sales.associate = (models) => {
    Sales.belongsTo(models.User, {
      as: 'users',
      foreignKey: 'user_id',
    });
  };

  Sales.associate = (models) => {
    Sales.belongsTo(models.User, {
      as: 'users',
      foreignKey: 'user_id',
    });
  };

  return Sales;
}

// CREATE TABLE IF NOT EXISTS sales (
//   id INT NOT NULL AUTO_INCREMENT,
//   user_id INT NOT NULL,
//   seller_id INT NOT NULL,
//   total_price DECIMAL(9,2) NOT NULL,
//   delivery_address VARCHAR(100) NOT NULL,
//   delivery_number VARCHAR(50) NOT NULL,
//   sale_date DATETIME NOT NULL,
//   status VARCHAR(50) NOT NULL,
//   PRIMARY KEY(id),
//   FOREIGN KEY (user_id) REFERENCES users(id),
//   FOREIGN KEY (seller_id) REFERENCES users(id)
// );

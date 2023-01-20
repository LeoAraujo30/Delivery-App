module.exports = (Sequelize, DataTypes) => {
  const SalesProduct = Sequelize.define('SalesProduct', {
    saleId: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true },
    productId: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
  },
  { timestamps: false, tableName: 'sales_products', underscored: true });

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      foreignKey: 'saleId',
      otherKey: 'productId',
      as: 'products',
      through: SalesProduct,
    });
    models.Product.belongsToMany(models.Sale, {
      foreignKey: 'productId',
      otherKey: 'saleId',
      as: 'sales',
      through: SalesProduct,
    });
  }

  return SalesProduct;
};
      
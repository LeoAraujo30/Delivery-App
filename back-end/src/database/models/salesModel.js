module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    totalPrice: { type: DataTypes.DECIMAL(9,2), allowNull: false },
    deliveryAddress: { type: DataTypes.STRING, allowNull: false },
    deliveryNumber: { type: DataTypes.STRING, allowNull: false },
    saleDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    status: { type: DataTypes.STRING, allowNull: false },
  }, {
    timestamps: false,
    tableName: 'sales',
    underscored: true,
  });

  Sale.associate = (models) => {
    Sale.hasMany(models.SalesProduct, {
      as: 'salesProducts',
      foreignKey: 'saleId',
    });
  };

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });
  };
  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      as: 'seller',
      foreignKey: 'sellerId',
    });
  };
  return Sale;
}

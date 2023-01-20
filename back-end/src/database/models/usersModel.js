module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false },
  }, {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  });

  User.associate = (models) => {
    User.hasMany(models.Sale, {
      as: 'sales',
      foreignKey: 'userId',
    });
  };
  User.associate = (models) => {
    User.hasMany(models.Sale, {
      as: 'sales',
      foreignKey: 'selleId',
    });
  };
  return User;
}
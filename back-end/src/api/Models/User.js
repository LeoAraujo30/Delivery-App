module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { // mudar para singular e primeira letra maiuscula em caso de erro
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING({ length: 100}),
    email: { type: DataTypes.STRING({ length: 100}), allowNull: false },
    password: { type: DataTypes.STRING({ length: 32}), allowNull: false },
    role: { type: DataTypes.STRING({ length: 20}), allowNull: false },
  }, {
    timestamps: false,
    tableName: 'users',
  });

  User.associate = (models) => {
    User.hasMany(models.Sales, {
      as: 'sales',
      foreignKey: 'user_id',
    });
  };
  User.associate = (models) => {
    User.hasMany(models.Sales, {
      as: 'sales',
      foreignKey: 'seller_id',
    });
  };

  return User;
}

// CREATE TABLE IF NOT EXISTS users (
// 	id INT NOT NULL AUTO_INCREMENT,
//   name VARCHAR(100) NOT NULL,
//   email VARCHAR(100) NOT NULL,
//   password VARCHAR(32) NOT NULL,
//   role VARCHAR(20) NOT NULL,
//   PRIMARY KEY (id),
//   UNIQUE KEY `email_un` (email)
// );

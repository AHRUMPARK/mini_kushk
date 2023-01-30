const Menu = (Sequelize, DataTypes) => {
  return Sequelize.define(
    'kushk',
    {
      menu_id: {
        type: DataTypes.STRING(15),
        allowNull: false,
        primaryKey: true,
      },
      menu_index: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      menu_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'menu',
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = Menu;

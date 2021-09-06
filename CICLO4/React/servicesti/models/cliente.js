'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model { // nome do obejto sempre começa com Maiusculo
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cliente.hasMany(models.Pedido);//de onde vem.objt
    }
  };
  Cliente.init({
    nome: DataTypes.STRING(50),
    endereco: DataTypes.STRING,
    cidade: DataTypes.STRING,
    uf: DataTypes.STRING(2),
    nascimento: DataTypes.DATEONLY
    //ano(4)-mes(2)-dia(2)
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};
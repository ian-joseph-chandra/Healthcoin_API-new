'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Blockchain extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.User, {foreignKey: 'blockchain_id', as: 'users'});
            this.hasMany(models.Hospital, {foreignKey: 'blockchain_id', as: 'hospitals'});
        }
    }
    Blockchain.init({
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        balance: {
            type: DataTypes.BIGINT.UNSIGNED,
        }
    }, {
        sequelize,
        modelName: 'Blockchain',
        tableName: 'blockchains',
        timestamps: false,
    });
    return Blockchain;
};

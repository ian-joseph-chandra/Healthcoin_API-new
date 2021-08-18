// const {Model, DataTypes} = require("sequelize"),
//     sequelize = require('./database/db-conn').sequelize;
//
// class Blockchain extends Model {
// }

module.exports = (sequelize, DataTypes) => {
    const Blockchain = sequelize.define('Blockchain', {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        balance: {
            type: DataTypes.BIGINT.UNSIGNED
        }
    }, {
        // sequelize,
        // modelName: 'Blockchain',
        tableName: 'blockchain',
        timestamps: false,
    });

    Blockchain.associate = function (models) {
        Blockchain.hasOne(models.User)
    };

    return Blockchain
}

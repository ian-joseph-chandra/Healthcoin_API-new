const {Model, DataTypes} = require("sequelize"),
    sequelize = require('./database/db-conn').sequelize;

class Blockchain extends Model {
}

Blockchain.init({
    id: {
        type: DataTypes.BIGINTEGER.UNSIGNED,
        primaryKey: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    balance: {
        type: DataTypes.BIGINTEGER.UNSIGNED
    }
}, {
    sequelize,
    modelName: 'Blockchain',
    tableName: 'blockchain',
    timestamps: false,
});

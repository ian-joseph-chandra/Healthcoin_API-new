const {Model, DataTypes} = require("sequelize"),
    sequelize = require('./database/db-conn').sequelize;

class Hospital extends Model {
}

Hospital.init({
    id: {
        type: DataTypes.BIGINTEGER.UNSIGNED,
        primaryKey: true
    },
    blockchainId: {
        type: DataTypes.BIGINTEGER.UNSIGNED,
        references: {
            model: Blockchain,
            key: 'id'
        },
        field: 'blockchain_id'
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Hospital',
    tableName: 'hospitals',
    timestamps: false,
});

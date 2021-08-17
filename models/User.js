const {Model, DataTypes} = require("sequelize"),
    sequelize = require('./database/db-conn').sequelize,
    UserRole = require('./UserRole');

class User extends Model {
}

User.init({
    id: {
        type: DataTypes.BIGINTEGER.UNSIGNED,
        primaryKey: true
    },
    roleId: {
        type: DataTypes.BIGINTEGER.UNSIGNED,
        references: {
            model: UserRole,
            key: 'id'
        },
        allowNull: false,
        field: 'role_id'
    },
    blockchainId: {
        type: DataTypes.BIGINTEGER.UNSIGNED,
        references: {
            model: UserRole,
            key: 'id'
        },
        field: 'blockchain_id'
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthDate: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'birth_date'
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    pass: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nationalId: {
        type: DataTypes.BIGINTEGER.UNSIGNED,
        allowNull: false,
        field: 'national_id'
    }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
});

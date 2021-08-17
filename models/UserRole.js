const {Model, DataTypes} = require("sequelize"),
    sequelize = require('./database/db-conn').sequelize;

class UserRole extends Model {
}

UserRole.init({
    id: {
        type: DataTypes.BIGINTEGER.UNSIGNED,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'UserRole',
    tableName: 'user_roles',
    timestamps: false,
});

'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class UserRole extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.User, {foreignKey: 'role_id', as: 'users'})
        }
    }

    UserRole.init({
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
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
    return UserRole;
};

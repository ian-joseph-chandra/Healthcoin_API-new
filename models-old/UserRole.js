// const {Model, DataTypes} = require("sequelize"),
//     sequelize = require('./database/db-conn').sequelize;
// const {User} = require("./User");
//
// class UserRole extends Model {}
//
// UserRole.init({
//     id: {
//         type: DataTypes.BIGINT.UNSIGNED,
//         autoIncrement: true,
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// }, {
//     sequelize,
//     modelName: 'UserRole',
//     tableName: 'user_roles',
//     timestamps: false,
// });

// User.belongsTo(UserRole, {
//     foreignKey: 'role_id'
// });
//
//
// UserRole.hasMany(User, {
//     foreignKey: 'id',
//     targetKey: 'role_id'
// });
//
// UserRole.findAll().then(r => console.log(r))

module.exports = (sequelize, DataTypes) => {
    // UserRole
    const UserRole = sequelize.define('UserRole', {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'user_roles',
        timestamps: false,
    });

    UserRole.associate = function (models) {
        UserRole.hasMany(models.User)
    }

    return UserRole
}

// const {Model, DataTypes} = require("sequelize"),
//     sequelize = require('./database/db-conn').sequelize;
// const {UserRole} = require("./UserRole");
//
// class User extends Model {}
//
// User.init({
//     id: {
//         type: DataTypes.BIGINT.UNSIGNED,
//         primaryKey: true
//     },
//     roleId: {
//         type: DataTypes.BIGINT.UNSIGNED,
//         // references: {
//         //     model: UserRole,
//         //     key: 'id'
//         // },
//         allowNull: false,
//         field: 'role_id'
//     },
//     blockchainId: {
//         type: DataTypes.BIGINT.UNSIGNED,
//         // references: {
//         //     model: Blockchain,
//         //     key: 'id'
//         // },
//         field: 'blockchain_id'
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     birthDate: {
//         type: DataTypes.DATE,
//         allowNull: false,
//         field: 'birth_date'
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     phone: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     address: {
//         type: DataTypes.TEXT,
//         allowNull: false
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     nationalId: {
//         type: DataTypes.BIGINT.UNSIGNED,
//         allowNull: false,
//         field: 'national_id'
//     }
// }, {
//     sequelize,
//     modelName: 'User',
//     tableName: 'users',
//     timestamps: false,
// });

// UserRole.hasMany(User, {
//     foreignKey: 'id',
//     targetKey: 'role_id'
// });

// User.findAll().then(r => console.log(r))
//
// User.findAll().then(r => console.log(r))

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        roleId: {
            type: DataTypes.BIGINT.UNSIGNED,
            references: {
                model: 'UserRole'
            },
            allowNull: false,
            field: 'role_id'
        },
        blockchainId: {
            type: DataTypes.BIGINT.UNSIGNED,
            references: {
                model: 'Blockchain'
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
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nationalId: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            field: 'national_id'
        }
    }, {
        // sequelize,
        // modelName: 'User',
        tableName: 'users',
        timestamps: false,
    });

    User.associate = function (models) {
        User.belongsTo(models.UserRole, {
            foreignKey: 'role_id'
        });
        User.belongsTo(models.Blockchain, {
            foreignKey: 'blockchain_id'
        })
    };

    return User
}

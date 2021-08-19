'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.UserRole, {foreignKey: 'role_id', as: 'role'});

            this.hasMany(models.UserRole, {foreignKey: 'patient_id', as:'patients'});
            this.hasMany(models.UserRole, {foreignKey: 'doctor_id', as:'doctors'});
            this.hasMany(models.RecordAccess, {foreignKey: 'patient_id', as: 'patients'});

            this.belongsToMany(models.Hospital, {
                through: 'doctors_hospitals',
                foreignKey: 'doctor_id',
                otherKey: 'hospital_id',
                as: 'hospitals'
            });
        }
    }

    User.init({
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        roleId: {
            type: DataTypes.BIGINT.UNSIGNED,
            // references: {
            //     model: 'UserRole'
            // },
            allowNull: false,
            field: 'role_id'
        },
        blockchainId: {
            type: DataTypes.BIGINT.UNSIGNED,
            // references: {
            //     model: 'Blockchain'
            // },
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
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: false
    });
    return User;
};
